function mapClickEvent() {
    // Reset information text when user clicks off a point
    information_header.innerHTML = 'Выберете Точку'
    information_coords.innerHTML = ''
    information_text.innerHTML = 'Нажмите на одну из точек карты чтобы увидеть больше информации о том или ином предмете или локации. Для некоторых точек имеются вспомогательные картинки, которые помогут вам понять, о чём <i>именно</i> идёт речь и как оно выгдядит.<br><br>Используйте вкладку <i>Точки</i> чтобы показать или скрывать те или иные категории.'
    information_images.replaceChildren()
}

function pointClickEvent() {
    // Update information text when point is clicked, and focus on info tab
    selectTab(0)
    let data = points[this.options.pointindex]
    information_header.innerHTML = data.name
    information_coords.innerHTML = `x: <u>${data.xPos}</u>, y: <u>${data.yPos}</u>`
    information_text.innerHTML = data.description
    information_images.replaceChildren()
    if (data.related_images && data.related_images.length) {
        data.related_images.forEach((link, imageindex) => {
            let element = document.createElement('img')
            element.src = link
            element.onclick = function() { previewImage(element) }
            element.classList.add('information_image')
            element.dataset.pointindex = this.options.pointindex
            element.dataset.imageindex = imageindex
            information_images.appendChild(element)
        })
    }
}

function toggleCategoryButton() {
    // Parse and pass information to function
    setCategoryVisibility(this.parentElement.id, !parseInt(this.dataset.visible), this)
}

function setCategoryVisibility(categoryname, setting=false, button=undefined) {
    // Hide or show layer and change visibility button (button must exist in the page)
    if (button == undefined) button = references[categoryname].menuparent.querySelector('.category_parentbutton')
    let layer = references[categoryname].leafletgroup
    if (setting) {
        layer.addTo(map)
        button.classList.remove('gray')
        button.innerText = '[Вкл.] '
        button.dataset.visible = 1
        settings[`${categoryname}_visible`] = true
    } else {
        map.removeLayer(layer)
        button.classList.add('gray')
        button.innerText = '[Выкл.]'
        button.dataset.visible = 0
        settings[`${categoryname}_visible`] = false
    }
    updateStorage()
}

// Create markers and categories for each when nessessary
var markerzoffset = 0
points.forEach((data, pointindex) => {
    let categoryname = `category_${(data.category != '' && data.category != undefined) ? data.category.toLowerCase().replaceAll(' ','_') : 'miscellaneous'}`

    // If the icon hasn't been loaded before, load it into ref.icons
    if (!references.icons[data.icon]) {
        references.icons[data.icon] = L.icon({
            iconUrl: data.icon,
            iconSize: [24, 24],
        })
    }
    // If the category hasn't been loaded before, create it and add some basic data
    if (!references[categoryname]) {
        // Prepare settings
        if (storageSupported) {
            var categoryvisible
            let settingname = `${categoryname}_visible`
            if (settings[settingname] == undefined || typeof settings[settingname] !== 'boolean') {
                // Setting does not exist
                if (categoryname == 'category_halloween_pumpkins' || categoryname == 'category_chicken_burgers' || categoryname == 'category_kerfur_parts' || categoryname == 'category_skulls') {
                    // Hardcoded categories hidden by default
                    categoryvisible = false
                } else {
                    categoryvisible = true
                }
                settings[settingname] = categoryvisible
            } else {
                categoryvisible = settings[settingname]
            }
        } else {
            categoryvisible = !(categoryname == 'category_halloween_pumpkins' || categoryname == 'category_notes' || categoryname == 'category_other_plushies'|| categoryname == 'category_chicken_burgers' || categoryname == 'category_kerfur_parts' || categoryname == 'category_skulls')
        }

        // Create generic category container element
        let categorycontainer = document.createElement('div')
        categorycontainer.id = categoryname
        categorycontainer.classList.add('category_parent')
        information_points.appendChild(categorycontainer)

        // Show/Hide button
        let visibilitybutton = document.createElement('div')
        visibilitybutton.classList.add('category_parentbutton')
        visibilitybutton.classList.add('unselectable')
        if (!categoryvisible) {
            visibilitybutton.classList.add('gray')
            visibilitybutton.innerText = '[Выкл.]'
            visibilitybutton.dataset.visible = 0
        } else {
            visibilitybutton.innerText = '[Вкл.] '
            visibilitybutton.dataset.visible = 1
        }
        visibilitybutton.addEventListener('click', toggleCategoryButton)
        categorycontainer.appendChild(visibilitybutton)

        // Text label
        let textlabel = document.createElement('div')
        textlabel.classList.add('category_parentname')
        textlabel.innerText = (data.category != '' && data.category != undefined) ? data.category : 'Другое'
        categorycontainer.appendChild(textlabel)

        // Add references
        references[categoryname] = {
            'menuparent': categorycontainer,
            'leafletgroup': L.layerGroup()
        }
        if (categoryvisible) references[categoryname].leafletgroup.addTo(map)
    }
    
    // Create the marker
    let marker = L.marker(
        convertGameToLeaflet([data.xPos,data.yPos]), 
        {
            icon: references.icons[data.icon],
            'zIndexOffset': markerzoffset,
            'pointindex': pointindex
        }
    )
    markerzoffset += 1
    // Bind click event, add popup, add to category layer
    marker.on('click', pointClickEvent)
    marker.addTo(references[categoryname].leafletgroup)
})

// Edit storage
if (storageSupported) updateStorage()

// Create lines
lines.forEach((data, lineindex) => {
    let categoryname = `category_${(data.category != '' && data.category != undefined) ? data.category.toLowerCase().replaceAll(' ','_') : 'miscellaneous'}`
    let polygon = L.polyline(data.coordinates.map(convertGameToLeaflet),
        {
            'smoothFactor': 0.5,
            'color': data.color,
            'weight': data.linethickness,
            'lineCap': 'square',
            'lineJoin': 'miter',
            'fill': Boolean(data.fill),
            'fillColor': data.fill,
            'interactive': false
        }
    )
    if (data.category) {
        // limitation: the line can only add itself to layers that already exist, otherwise it will error
        polygon.addTo(references[categoryname].leafletgroup)
    } else {
        polygon.addTo(map)
    }
})

map.on('click', mapClickEvent)
mapClickEvent()

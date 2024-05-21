const $ = document

const colorBtns = $.querySelectorAll(".btn")

const fallowBtn = $.getElementById("fallow")
const messageBtn = $.getElementById("message")

colorBtns.forEach(function (colorBtn) {
    colorBtn.addEventListener("click", function (event) {
        let btnColor = event.target.dataset.color 

        $.documentElement.style.setProperty("--theme-color", btnColor)
        // console.log(btnColor)
    })
})

// fallowBtn.addEventListener("click", fallowUser)
// messageBtn.addEventListener("click", messageUser)
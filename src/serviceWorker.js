const AFRAME = window.AFRAME

export default function (setCursorXYZ) {

    if (!AFRAME.components['cursor-listener']) {

        AFRAME.registerComponent('cursor-listener', {
            init: function () {
                var lastIndex = -1;
                var COLORS = ['red', 'green', 'blue'];
                this.el.addEventListener('click', function (evt) {
                    lastIndex = (lastIndex + 1) % COLORS.length;
                    this.setAttribute('material', 'color', COLORS[lastIndex]);
                    console.log('I was clicked at: ', evt.detail.intersection.point);
                    // console.log({ ...evt.detail.intersection.point })
                    setCursorXYZ({ ...evt.detail.intersection.point })
                });
            }
        });
    }

}

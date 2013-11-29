/**
 * Created by sergei on 11/25/13.
 */
/*
 отладочные функции
 */
//var console.log = console.log;
/*
 Home work 5
 */
var HW5 = HW5 || {
    tableElement: null,
    selectedCell:null,
    selectedRow:null,
    select: function (element) {
        if(this.selectedCell!=null){
            this.selectedCell.className = 'cell';
        }
        this.selectedCell = element;
        this.selectedRow = HW5.selectedCell.parentNode;
        console.log(this.selectedRow);
        element.className = 'selected';
    },
    init: function (selector) {
        this.tableElement = document.querySelector(selector);
        this.keyHandler.add();
        this.mouseHandler.add(this.tableElement);

    },
    keyHandler: {
        add: function () {
            HW5.keyHandler = function (event) {
                console.log(event);
                switch (event.keyCode) {
                    case 13:
                    {
                        if (event.shiftKey) {
                            console.log('Shift+Enter')
                        }
                        else {
                            console.log('Enter')
                        }
                    }
                        break;
                    case 46:
                    {
                        if (event.shiftKey) {
                            console.log('Shift+Delete')
                        }
                        else {
                            console.log('Delete')
                        }
                    }
                        break;
                    case 37:console.log('<');
                        break;
                    case 38:console.log('up');
                        break;
                    case 39:console.log('>');
                        break;
                    case 40:console.log('down');
                        break;
                    default:
                        console.log('non');
                }

            };
            document.onkeypress = HW5.keyHandler;
        }
    },
    mouseHandler: {
        add: function (element) {
            HW5.mouseHandler = function(event){
                console.log(event);
                console.log(event.originalTarget);
                HW5.select(event.originalTarget);
            };
            element.onclick = HW5.mouseHandler;
        }
    }
};

console.log('test');
HW5.init('.exel');
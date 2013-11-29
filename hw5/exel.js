/**
 * Created by sergei on 11/25/13.
 */
/*
 отладочные функции
 */
var clog = console.log;
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
        clog(this.selectedRow);
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
                clog(event);
                switch (event.keyCode) {
                    case 13:
                    {
                        if (event.shiftKey) {
                            clog('Shift+Enter')
                        }
                        else {
                            clog('Enter')
                        }
                    }
                        break;
                    case 46:
                    {
                        if (event.shiftKey) {
                            clog('Shift+Delete')
                        }
                        else {
                            clog('Delete')
                        }
                    }
                        break;
                    case 37:clog('<');
                        break;
                    case 38:clog('up');
                        break;
                    case 39:clog('>');
                        break;
                    case 40:clog('down');
                        break;
                    default:
                        clog('non');
                }

            };
            document.onkeypress = HW5.keyHandler;
        }
    },
    mouseHandler: {
        add: function (element) {
            HW5.mouseHandler = function(event){
                clog(event);
                clog(event.originalTarget);
                HW5.select(event.originalTarget);
            };
            element.onclick = HW5.mouseHandler;
        }
    }
};

clog('test');
HW5.init('.exel');
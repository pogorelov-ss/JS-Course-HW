/**
 * Created by sergei on 11/25/13.
 Home work 5
 */
var HW5 = HW5 || {
    tableElement: null,
    selectedCell:null,
    selectedRow:null,
    rows:1,
    columns:1,
    Cursor:{row:1,column:1},
    selectCell: function (element) {
        if(this.selectedCell!=null){
            this.selectedCell.className = 'cell';
        }
        this.selectedCell = element;
        this.selectedRow = this.selectedCell.parentNode;
        console.log(this.selectedRow.rowIndex);
        element.className = 'selected';
    },
    drawCursor:function(){},
    init: function (selector) {
        this.tableElement = document.querySelector(selector);
        this.keyHandler.add();
        this.tableElement.onclick = this.mouseHandler;//шансов что на нашу табличку еще ктонить повесит онклик немного?
        this.selectedRow = this.tableElement.querySelector('#firstRow');
        this.selectedCell = this.tableElement.querySelector('#firstCell');

    },
    addRow:function(){
        var row = HW5.tableElement.insertRow(-1);//.insertCell(-1).className='cell';
        for (var i = 0; i < this.columns; i++) {
            row.insertCell(-1).className='cell';
        }
        this.rows++;
    },
    addColumn:function(){
        var tableBody = this.tableElement.firstElementChild;
        for (var i = 0; i < this.rows; i++) {
            tableBody.children[i].insertCell(-1).className='cell';
        }
        this.columns++;
        //HW5.selectedRow.insertCell(-1).className = 'cell';
    },
    removeRow:function(){
        HW5.tableElement.deleteRow(-1);
        this.rows--;
    },
    removeColumn:function(){
        var tableBody = this.tableElement.firstElementChild;
        for (var i = 0; i < this.rows; i++) {
            tableBody.children[i].deleteCell(-1);
        }
        this.columns--;
    },
    moveCursorLR:function(direction){//+-1

    },
    moveCursorUD:function(direction){//+-1

    },
    keyHandler: {//тут я немного извратился с изменением объекта .. и надо б поменять добавление обработчика
        add: function () {
            HW5.keyHandler = function (event) {
                console.log(event);
                switch (event.keyCode) {
                    case 13:
                    {
                        if (event.shiftKey) {
                            console.log('Shift+Enter');
                            HW5.addColumn();
                        }
                        else {
                            console.log('Enter');
                            HW5.addRow();
                            //console.log(HW5.selectedRow.rowIndex);
                        }
                    }
                        break;
                    case 46:
                    {
                        if (event.shiftKey) {
                            console.log('Shift+Delete');
                            HW5.removeColumn();
                        }
                        else {
                            HW5.removeRow();
                            console.log('Delete');
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
            document.onkeydown = HW5.keyHandler;
        }
    },
    mouseHandler: function(event){
        console.log(event);
        console.log(event.target);
        console.log('this.selectedCell '+HW5.selectedCell);
        if (event.target.className == 'cell'){
            HW5.selectCell(event.target);

        }

    }
};

console.log('test');
HW5.init('.exel');

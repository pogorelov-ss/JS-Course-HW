/**
 * Created by sergei on 11/25/13.
 Home work 5
 */

var HW5 = HW5 || {
    tableElement: null,
    activeCell:null,
    activeRow:null,
    rows:1,
    columns:1,
    Cursor:{row:1,column:1},
    selectCell: function (element) {
        this.deselectCell();
        this.deselectRow();
        this.deselectTable();
        this.activeCell = element;
        this.activeRow = this.activeCell.parentNode;
        console.log(this.activeRow.rowIndex);
        element.classList.toggle('selected');
    },
    selectRow:function(element){
        this.deselectCell();
        this.deselectTable();
        this.deselectRow();
        element.classList.toggle('selected');
        this.activeRow = element;
    },
    selectTable:function(){
        this.deselectCell();
        this.deselectRow();
        this.tableElement.firstElementChild.classList.toggle('selected');
    },
    deselectCell:function(){
        if(this.activeCell!=null){
            this.activeCell.className = 'cell';
        }
        //this.activeCell = null;
    },
    deselectRow:function(){
        if(this.activeRow!=null){
            this.activeRow.className = 'row';
        }
        //this.activeRow = null;
    },
    deselectTable:function(){
        this.tableElement.firstElementChild.className = 'tbody';
    },
    init: function (selector) {
        this.tableElement = document.querySelector(selector);
        this.keyHandler.add();
        this.tableElement.onclick = this.mouseHandler;//шансов что на нашу табличку еще ктонить повесит онклик немного?
        this.selectCell(this.tableElement.firstElementChild.firstElementChild.firstElementChild);
    },
    addRow:function(){
        var row = HW5.tableElement.insertRow(-1);
        row.className = 'row';//.insertCell(-1).className='cell';
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
        //HW5.activeRow.insertCell(-1).className = 'cell';
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
    moveCursorLR:function(direction){//+-n
        this.deselectRow();
        var CellIndex = this.activeCell.cellIndex,
            nextCell;
        if (this.activeCell.classList.contains('selected')){
            nextCell = this.activeRow.children[CellIndex+direction];
        }
        else {
            nextCell = this.activeRow.children[CellIndex];
        }
        if (nextCell) this.selectCell(nextCell);
        else this.selectRow(this.activeRow);
    },
    moveCursorUD:function(direction){//+-n
        var RowIndex = this.activeRow.rowIndex,
            nextRow;
        if (this.tableElement.firstElementChild.classList.contains('selected')){
            this.selectRow(this.activeRow);
            //this.activeCell=this.activeRow.firstElementChild;
            return
        }
        nextRow = this.tableElement.firstElementChild.children[RowIndex+direction];
        if (nextRow){
            if (this.activeRow.classList.contains('selected')){
                this.selectRow(nextRow);
            }
            else{
                this.activeRow = nextRow;
                this.selectCell(nextRow.children[this.activeCell.cellIndex])
            }
        }
        else{
            this.selectTable();
        }


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
                            //console.log(HW5.activeRow.rowIndex);
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
                        HW5.moveCursorLR(-1);
                        break;
                    case 38:console.log('up');
                        HW5.moveCursorUD(-1);
                        break;
                    case 39:console.log('>');
                        HW5.moveCursorLR(1);
                        break;
                    case 40:console.log('down');
                        HW5.moveCursorUD(1);
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
        console.log('this.activeCell '+HW5.activeCell);
        if (event.target.className == 'cell'){
            HW5.selectCell(event.target);

        }

    }
};

console.log('test');
HW5.init('.exel');

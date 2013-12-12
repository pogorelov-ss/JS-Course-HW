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
        this.deselectCell();
        this.deselectRow();
        this.deselectTable();
        this.selectedCell = element;
        this.selectedRow = this.selectedCell.parentNode;
        console.log(this.selectedRow.rowIndex);
        element.classList.toggle('selected');
    },
    selectRow:function(element){
        this.deselectCell();
        this.deselectTable();
        this.deselectRow();
        element.classList.toggle('selected');
        this.selectedRow = element;
    },
    selectTable:function(){
        this.deselectCell();
        this.deselectRow();
        this.tableElement.firstElementChild.classList.toggle('selected');
    },
    deselectCell:function(){
        if(this.selectedCell!=null){
            this.selectedCell.className = 'cell';
        }
        //this.selectedCell = null;
    },
    deselectRow:function(){
        if(this.selectedRow!=null){
            this.selectedRow.className = 'row';
        }
        //this.selectedRow = null;
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
    moveCursorLR:function(direction){//+-n
        this.deselectRow();
        var CellIndex = this.selectedCell.cellIndex,
            nextCell;
        if (this.selectedCell.classList.contains('selected')){
            nextCell = this.selectedRow.children[CellIndex+direction];
        }
        else {
            nextCell = this.selectedRow.children[CellIndex];
        }
        if (nextCell) this.selectCell(nextCell);
        else this.selectRow(this.selectedRow);
    },
    moveCursorUD:function(direction){//+-n
        var RowIndex = this.selectedRow.rowIndex,
            nextRow;
        if (this.tableElement.firstElementChild.classList.contains('selected')){
            this.selectRow(this.selectedRow);
            //this.selectedCell=this.selectedRow.firstElementChild;
            return
        }
        nextRow = this.tableElement.firstElementChild.children[RowIndex+direction];
        if (nextRow){
            if (this.selectedRow.classList.contains('selected')){
                this.selectRow(nextRow);
            }
            else{
                this.selectedRow = nextRow;
                this.selectCell(nextRow.children[this.selectedCell.cellIndex])
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
        console.log('this.selectedCell '+HW5.selectedCell);
        if (event.target.className == 'cell'){
            HW5.selectCell(event.target);

        }

    }
};

console.log('test');
HW5.init('.exel');

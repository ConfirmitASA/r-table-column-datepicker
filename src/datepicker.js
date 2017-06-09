var styles = require('./datepicker.css');

class TableColumnDatepicker {
  constructor(options) {
    var header = options.header;
    var datepicker = options.datepicker;
    datepicker.classList.add('hidden');
    datepicker.classList.add('table-column-datepicker');

    var img = document.createElement('img');
    img.setAttribute('src', '/cf_clientutil/images/calendar_16.png');

    header.appendChild(img1);
    img.addEventListener('click', function() {
      datepicker.classList.toggle('hidden');
    });

  }
}


export default TableColumnDatepicker;

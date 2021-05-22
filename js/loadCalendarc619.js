function loadCalendar()
{
	try
	{
		calendar = new tcal ({
			'controlname': 'Express_Menu1_calInput',
			'id' : 'cal'
		});
	}
	catch (e)
	{
		alert(e.message);
	}
	
}

function changePage(selectedDate)
{
	if(selectedDate != false)
	{
		var year = selectedDate.getFullYear();
		var month = selectedDate.getMonth();
		var date = selectedDate.getDate();
		
		month = (month < 9 ? '0' : '') + (month + 1);
		date = (date < 10 ? '0' : '') + date;
		
		var newDate = year + month + date;
		var dateRegEx = new RegExp('[0-9]{8,8}');
		if(window.source.match(dateRegEx) != null)
			window.target.location = window.source.replace(dateRegEx, newDate);
		else
		{
			window.target.location = "/epaper/index.aspx?Date="+newDate;
		}
 	}
}
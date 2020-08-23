const assignments = document.querySelectorAll('[data-test="My Assignments"]')[0].getElementsByTagName("ul");

for (var i = 0; i < assignments.length; i++) {
    // add-to-calendar-buttons (https://github.com/carlsednaoui/add-to-calendar-buttons/)
    var myCalendar = createCalendar({
        options: {
          class: 'add-to-calendar'
        },
        data: {
          title: assignments[i].getElementsByTagName("div")[0].innerText + " (WebAssign)",
          start: new Date(assignments[i].getElementsByTagName("div")[2].innerText),
          description: "Event available on WebAssign: " + document.URL,
          address: "WebAssign",
          duration: 0
        }
      });
    myCalendar.style.marginLeft = "5px";
    assignments[i].getElementsByTagName("div")[0].appendChild(myCalendar);
}
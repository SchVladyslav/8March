$(function() {
  var target = document.querySelector(".instafeed");
  var loadButton = document.getElementById("load-more");

  var feed = new Instafeed({
    clientId: "e922e5eb6ab94da888539018afcfb4a4",
    // accessToken: "4385108.467ede5.3307aa3bd61a4793b95d428d4c40c94f",
    get: "user",
    userId: "2063322279",
    //       locationId: '214534678',
    //       resolution: 'low_resoluti2on',
    limit: "1",
    target: target,
    template: '<img src="{{image}}"/>{{caption}}',
    useHttp: true,
    success: function(data) {
      console.log(data);
    },
    after: function() {
      if (!this.hasNext()) {
        loadButton.setAttribute("disabled", "disabled");
      }
    }
  });

  // bind the load more button
  loadButton.addEventListener("click", function() {
    feed.next();
  });

  // run our feed!
  feed.run();
});

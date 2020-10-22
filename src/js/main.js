(function () {
  const win = window;
  const doc = document.documentElement;

  doc.classList.remove("no-js");
  doc.classList.add("js");

  // Reveal animations
  if (document.body.classList.contains("has-animations")) {
    /* global ScrollReveal */
    const sr = (window.sr = ScrollReveal());

    sr.reveal(".feature, .pricing-table-inner", {
      duration: 600,
      distance: "20px",
      easing: "cubic-bezier(0.5, -0.01, 0, 1.005)",
      origin: "bottom",
      interval: 100,
    });

    doc.classList.add("anime-ready");
    /* global anime */
    anime
      .timeline({
        targets: ".hero-figure-box-05",
      })
      .add({
        duration: 400,
        easing: "easeInOutExpo",
        scaleX: [0.05, 0.05],
        scaleY: [0, 1],
        perspective: "500px",
        delay: anime.random(0, 400),
      })
      .add({
        duration: 400,
        easing: "easeInOutExpo",
        scaleX: 1,
      })
      .add({
        duration: 800,
        rotateY: "-15deg",
        rotateX: "8deg",
        rotateZ: "-1deg",
      });

    anime
      .timeline({
        targets: ".hero-figure-box-06, .hero-figure-box-07",
      })
      .add({
        duration: 400,
        easing: "easeInOutExpo",
        scaleX: [0.05, 0.05],
        scaleY: [0, 1],
        perspective: "500px",
        delay: anime.random(0, 400),
      })
      .add({
        duration: 400,
        easing: "easeInOutExpo",
        scaleX: 1,
      })
      .add({
        duration: 800,
        rotateZ: "20deg",
      });

    anime({
      targets:
        ".hero-figure-box-01, .hero-figure-box-02, .hero-figure-box-03, .hero-figure-box-04, .hero-figure-box-08, .hero-figure-box-09, .hero-figure-box-10",
      duration: anime.random(600, 800),
      delay: anime.random(600, 800),
      rotate: [
        anime.random(-360, 360),
        function (el) {
          return el.getAttribute("data-rotation");
        },
      ],
      scale: [0.7, 1],
      opacity: [0, 1],
      easing: "easeInOutExpo",
    });
  }

  // Requires jQuery!
  $.ajax({
    url:
      "https://jira.tools.ci.vodafone.com/s/296b0ec2ab90586e07cf344157001650-T/-al3k0q/805003/ce906448491a99eb671cbc4bc24f43de/3.1.0/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs.js?locale=en-UK&collectorId=14af3c6b",
    type: "get",
    cache: true,
    dataType: "script",
  });

  window.ATL_JQ_PAGE_PROPS = {
    triggerFunction: function (showCollectorDialog) {
      //Requires that jQuery is available!
      $("#newRequest").click(function (e) {
        e.preventDefault();
        showCollectorDialog();
      });
    },
    fieldValues: {
      summary: "OE/OES/AM - [Title]",
      description: "",
    },
  };
})();

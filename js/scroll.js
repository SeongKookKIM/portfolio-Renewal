gsap.from(".welcome h3", 1, {
  y: innerHeight * -1,
  opacity: 0,
  ease: "power3.inout",
  stagger: 0.1,
});
gsap.to(".welcome", 1, {
  left: "-100%",
  opacity: 0,
  ease: "power3.inout",
  stagger: 0.1,
  delay: 2,
});
gsap.from(".portfolio h2", 1, {
  opacity: 0,
  ease: "power3.inout",
  stagger: 0.1,
  delay: 2,
  y: innerHeight * 0.1,
});
gsap.from(".name h3", 1, {
  y: innerHeight * 0.1,
  opacity: 0,
  ease: "power3.inout",
  stagger: 0.1,
  delay: 2.5,
});
gsap
  .timeline({
    scrollTrigger: {
      trigger: "header",
      start: "top top",
      end: "bottom 20%",
      scrub: 1,
      pin: true,
      duration: 5,
    },
  })
  .to("header .name", { top: 100, duration: 1, opacity: 0 })
  .from("header .portfolio", { left: "0", duration: 1 });

gsap
  .timeline({
    scrollTrigger: {
      trigger: "#About",
      start: "top top",
      end: "bottom center",
      scrub: 1,
      pin: true,
    },
  })
  .from("#About .about-content-wrapper", {
    y: innerHeight * -0.5,
    duration: 1,
    opacity: 0,
    scale: 0,
  });

gsap
  .timeline({
    scrollTrigger: {
      trigger: "#project",
      start: "top top",
      end: "200% 10%",
      scrub: 1,
      pin: true,
      duration: 10,
    },
  })
  .to("#project ul", { delay: 0.1, left: "-150%" });
gsap
  .timeline({
    scrollTrigger: {
      trigger: "#skill",
      start: "-20% -30%",
      end: "30% 20%",
      scrub: 1,
    },
  })
  .from("#skill .skill-wrapper ul li img", {
    delay: 0.1,
    scale: 0.9,
    opacity: 0.5,
  });

gsap
  .timeline({
    scrollTrigger: {
      trigger: "#contact",
      start: "-20% top",
      end: " 5% 10%",
      scrub: 1,
    },
  })
  .from("#contact .contact-scroll h2 span:nth-child(1)", {
    y: innerHeight * 1,
    opacity: 0,
    duration: 3,
  })
  .from("#contact .contact-scroll h2 span:nth-child(2)", {
    y: innerHeight * 1,
    opacity: 0,
    duration: 3,
  })
  .from("#contact .contact-scroll h2 span:nth-child(3)", {
    y: innerHeight * 1,
    opacity: 0,
  })
  .from("#contact .contact-scroll h2 span:nth-child(4)", {
    y: innerHeight * 1,
    opacity: 0,
    duration: 3,
  })
  .from("#contact .contact-scroll h2 span:nth-child(5)", {
    y: innerHeight * 1,
    opacity: 0,
    duration: 3,
  })
  .from("#contact .contact-scroll h2 span:nth-child(6)", {
    y: innerHeight * 1,
    opacity: 0,
    duration: 3,
  })
  .from("#contact .contact-scroll h2 span:nth-child(7)", {
    y: innerHeight * 1,
    opacity: 0,
    duration: 3,
  });

gsap.registerPlugin(CustomEase);
CustomEase.create("hop", "M0,0 C0.3,0 0.1,1 1,1");

let wrapper = document.querySelector(".wrapper");
let wrapperLeft = document.querySelector(".wrapper-left");
let wrapperLeftBox = document.querySelectorAll(".wrapper-left .box-left");
let wrapperLeftBoxImg = document.querySelectorAll(
  ".wrapper-left .box-left img"
);
let wrapperLeftBoxImgOrange = document.querySelectorAll(
  ".wrapper-left .box-left .orange"
);
let wrapperLeftBoxImgBlue = document.querySelectorAll(
  ".wrapper-left .box-left .blue"
);
let wrapperLeftBoxImgGreen = document.querySelectorAll(
  ".wrapper-left .box-left .green"
);
let wrapperRight = document.querySelector(".wrapper-right");
let wrapperRightBox = document.querySelector(".wrapper-right .box-right");
let wrapperRightBoxImg = document.querySelectorAll(
  ".wrapper-right .box-right img"
);
let wrapperRightBoxImgOrange = document.querySelector(
  ".wrapper-right .box-right .orange"
);
let wrapperRightBoxImgBlue = document.querySelector(
  ".wrapper-right .box-right .blue"
);
let wrapperRightBoxImgGreen = document.querySelector(
  ".wrapper-right .box-right .green"
);
let box = document.querySelectorAll(".box");
let boxImg = document.querySelectorAll(".box img");
let counter = document.querySelector(".counter .current p");
let lines = document.querySelectorAll(".counter .line");
let video = document.querySelector(".video_1");
let videoBlue = document.querySelector(".video_2");
let videoGreen = document.querySelector(".video_3");
let boxFromVideo = document.querySelector(
  ".hero-section .container .wrapper .from-video"
);
let allVideo = document.querySelectorAll(
  ".hero-section .container .wrapper .from-video video"
);
let closeAnimation = document.querySelector(".close-animation");
let arrowLeft = document.querySelector(".arrow-left");
let arrowRight = document.querySelector(".arrow-right");
let socials = document.querySelector(".socials");
let gridDescription = document.querySelector(".grid");
let numbers = document.querySelector(".numbers");
let buttonsArrows = document.querySelector(".buttons-arrow");
let descriptionBottom = document.querySelector(".description-bottom");
let infoCall = descriptionBottom.querySelectorAll(".info-col .hide-text");
let countNumbers = document.querySelector(".numbers .hide-text .try");
let changeTextBlocks = document.querySelectorAll(".change-text");

function updateCETTime() {
  const options = {
    timeZone: "Europe/Berlin",
    hour: "numeric",
    minute: "numeric",
    hour12: true
  };
  const formatter = new Intl.DateTimeFormat("en-US", options);
  const cetTime = formatter.format(new Date());

  document.getElementById("cet-time").textContent = cetTime;
}
setInterval(updateCETTime, 1000);
updateCETTime();

const tl = gsap.timeline({
  onComplete: () => {
    if (box.length === 3) {
      box[1].style.display = "none";
      const anim1 = gsap
        .timeline()
        .to(box[0].querySelector("img"), {
          x: "20px",
          ease: "hop",
          duration: 0.3
        })
        .to(box[0], {
          x: "-400px",
          ease: "hop",
          duration: 0.6,
          zIndex: 2
        })
        .to(
          box[0].querySelector("img"),
          {
            x: "0px",
            ease: "hop",
            duration: 0.3
          },
          0.5
        );
      const anim2 = gsap
        .timeline()
        .to(box[2].querySelector("img"), {
          x: "-20px",
          ease: "hop",
          duration: 0.3
        })
        .to(box[2], {
          x: "400px",
          ease: "hop",
          duration: 0.6
        })
        .to(
          counter,
          {
            duration: 0.3,
            ease: "hop",
            y: "0%"
          },
          "<"
        )
        .to(
          lines,
          {
            duration: 0.1,
            delay: 0.1,
            onComplete: () => {
              lines.forEach((line) => line.classList.add("active"));
            }
          },
          "<"
        )
        .to(
          box[2].querySelector("img"),
          {
            x: "0px",
            ease: "hop",
            duration: 0.3
          },
          0.5
        )
        .to(counter, {
          innerHTML: 100,
          duration: 1,
          ease: "hop",
          snap: { innerHTML: 1 },
          onUpdate: () => {
            counter.textContent = String(
              Math.round(counter.innerHTML)
            ).padStart(2, "0");
          }
        })
        .to(lines, {
          rotation: 180,
          ease: "hop",
          duration: 0.3
        })
        .to(counter, {
          duration: 0.3,
          ease: "hop",
          y: "100%"
        })
        .to(lines, {
          duration: 0.3,
          delay: 0.1,
          onComplete: () => {
            lines.forEach((line) => line.classList.remove("active"));
          }
        })
        .call(() => {
          const anim3 = gsap
            .timeline()
            .to(box[0].querySelector("img"), {
              x: "-20px",
              ease: "hop",
              duration: 0.3
            })
            .to(box[0], {
              x: "0px",
              ease: "hop",
              duration: 0.6,
              zIndex: 2
            })
            .to(
              box[0].querySelector("img"),
              {
                x: "0px",
                ease: "hop",
                duration: 0.3
              },
              0.5
            );

          const anim4 = gsap
            .timeline()
            .to(box[2].querySelector("img"), {
              x: "20px",
              ease: "hop",
              duration: 0.3
            })
            .to(box[2], {
              x: "0px",
              ease: "hop",
              duration: 0.6
            })
            .to(
              box[2].querySelector("img"),
              {
                x: "0px",
                ease: "hop",
                duration: 0.3
              },
              0.5
            );
          anim4.call(() => {
            runAdditionalTimeline2();
          });
        });
    }
  }
});

function runAdditionalTimeline2() {
  const tl2 = gsap.timeline();
  tl2.to(
    video,
    {
      display: "flex",
      opacity: 1,
      duration: 0.5,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
    },
    0
  );
  tl2.add(() => {
    video.play();
  }, 0);

  tl2.add(() => {
    box[0].classList.add("active");
  }, 0);

  tl2.to(
    box[0],
    {
      height: "420px",
      duration: 1,
      ease: "hop"
    },
    0
  );
  tl2.to(
    wrapperLeftBox,
    {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      ease: "hop",
      duration: 1,
      stagger: 0.2
    },
    0
  );
  tl2.to(
    wrapperLeftBoxImgOrange,
    {
      ease: "hop",
      duration: 1,
      scale: 1.5
    },
    0
  );
  tl2.to(
    wrapperRightBox,
    {
      clipPath: "polygon(0% 0,100% 0,100% 100%,0% 100%)",
      ease: "hop",
      duration: 1
    },
    0
  );
  tl2.to(
    wrapperRightBoxImgBlue,
    {
      ease: "hop",
      duration: 1,
      scale: 1
    },
    0
  );
  tl2.to(
    box[2],
    {
      display: "none",
      duration: 0.1
    },
    0
  );

  tl2.to(
    box[0].querySelector("img"),
    {
      zIndex: -2,
      duration: 0.1,
      display: "none"
    },
    0
  );

  tl2.add(() => {
    socials.classList.add("active");
  }, 0);

  tl2.add(() => {
    gridDescription.classList.add("active");
  }, 0);

  tl2.add(() => {
    numbers.classList.add("active");
  }, 0);

  tl2.add(() => {
    buttonsArrows.classList.add("active");
  }, 0);

  tl2.add(() => {
    infoCall.forEach((container) => {
      const firstParagraph = container.querySelector("p");
      if (firstParagraph) {
        firstParagraph.classList.add("active");
      }
    });
  }, 0);
  const infiniteScroll = gsap.timeline({ repeat: -1, ease: "linear" });

  infiniteScroll.to(wrapperLeft, {
    y: "-50%",
    duration: 16,
    ease: "none",
    onComplete: () => {
      gsap.set(wrapperLeft, { y: "0%" });
    }
  });
  tl2.add(infiniteScroll, "<");

  let isAnimating = false;
  const changeTextBlocks = document.querySelectorAll(".change-text");

  changeTextBlocks.forEach((block) => {
    const paragraphs = block.querySelectorAll("p");
    let activeIndex = 0;

    const updateActiveParagraph = (newIndex) => {
      paragraphs[activeIndex].classList.remove("active");
      activeIndex = newIndex;
      paragraphs[activeIndex].classList.add("active");
    };
    paragraphs[activeIndex].classList.add("active");

    arrowLeft.addEventListener("click", () => {
      if (isAnimating) return;
      isAnimating = true;
      const newIndex =
        (activeIndex - 1 + paragraphs.length) % paragraphs.length;
      updateActiveParagraph(newIndex);
      isAnimating = false;
    });

    arrowRight.addEventListener("click", () => {
      if (isAnimating) return;
      isAnimating = true;
      const newIndex = (activeIndex + 1) % paragraphs.length;
      updateActiveParagraph(newIndex);
      isAnimating = false;
    });
  });
  let currentIndex = 0;
  let clickCount = 0;

  allVideo.forEach((video, index) => {
    if (index !== currentIndex) {
      video.style.display = "none";
    } else {
      video.play();
    }
  });
  arrowLeft.addEventListener("click", () => {
    const currentVideo = allVideo[currentIndex];
    const currentRightImg = wrapperRightBoxImg[currentIndex];
    const prevIndex = (currentIndex - 1 + allVideo.length) % allVideo.length;
    const prevVideo = allVideo[prevIndex];
    const prevRightImg = wrapperRightBoxImg[prevIndex];

    gsap.set(prevVideo, {
      display: "flex",
      clipPath: "polygon(100% 100%, 100% 100%, 100% 100%, 100% 100%)",
      zIndex: 1
    });
    prevVideo.play();

    clickCount -= 1;
    if (clickCount < 0) {
      clickCount = 2;
    }
    const yShift = clickCount * -11;

    gsap.to(countNumbers, {
      y: `${yShift}px`,
      ease: "hop",
      duration: 0.3
    });

    gsap.to(prevVideo, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1,
      onComplete: () => {
        currentVideo.pause();
        currentVideo.style.display = "none";
        prevVideo.style.zIndex = "-1";
      }
    });

    gsap.set(prevRightImg, {
      display: "flex",
      clipPath: "polygon(100% 100%, 100% 100%, 100% 100%, 100% 100%)",
      zIndex: 1,
      scale: 1.5
    });

    gsap.to(prevRightImg, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      scale: 1.15,
      duration: 1,
      ease: "hop",
      onComplete: () => {
        currentRightImg.style.display = "none";
        prevRightImg.style.zIndex = "-1";
      }
    });

    const imageSequences = ["orange", "blue", "green"];

    const prevImageClass =
      imageSequences[
        (currentIndex - 1 + imageSequences.length) % imageSequences.length
      ];

    wrapperLeftBox.forEach((box, index) => {
      const nextImg = box.querySelector(`.${imageSequences[currentIndex]}`);
      const prevImg = box.querySelector(`.${prevImageClass}`);

      const tl3 = gsap.timeline();
      tl3.set(prevImg, {
        display: "flex",
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
        zIndex: 1,
        scale: 2
      });

      tl3.to(prevImg, {
        clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "hop",
        duration: 1,
        scale: 1.1,
        stagger: 0.2 * index,
        delay: 0.2,
        onComplete: () => {
          nextImg.style.display = "none";
          nextImg.style.clipPath =
            "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)";
          prevImg.style.zIndex = "-1";
        }
      });
    });
    currentIndex = prevIndex;
    isAnimating = false;
  });
  //Click change animation
  arrowRight.addEventListener("click", () => {
    const currentVideo = allVideo[currentIndex];
    const currentRightImg = wrapperRightBoxImg[currentIndex];
    const nextIndex = (currentIndex + 1) % allVideo.length;
    const nextVideo = allVideo[nextIndex];
    const nexRightImg = wrapperRightBoxImg[nextIndex];

    gsap.set(nextVideo, {
      display: "flex",
      clipPath: "polygon(100% 100%, 100% 100%, 100% 100%, 100% 100%)",
      zIndex: 1
    });
    nextVideo.play();

    clickCount += 1;
    const yShift = clickCount * -11;

    if (clickCount > 2) {
      clickCount = 0;
      gsap.to(countNumbers, {
        y: "0px",
        ease: "hop",
        duration: 0.3
      });
    } else {
      gsap.to(countNumbers, {
        y: `${yShift}px`,
        ease: "hop",
        duration: 0.3
      });
    }

    gsap.to(nextVideo, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1,
      onComplete: () => {
        currentVideo.pause();
        currentVideo.style.display = "none";
        nextVideo.style.zIndex = "-1";
      }
    });

    gsap.set(nexRightImg, {
      display: "flex",
      clipPath: "polygon(100% 100%, 100% 100%, 100% 100%, 100% 100%)",
      zIndex: 1,
      scale: 1.5
    });

    gsap.to(nexRightImg, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      scale: 1.15,
      duration: 1,
      ease: "hop",
      onComplete: () => {
        currentRightImg.style.display = "none";
        nexRightImg.style.zIndex = "-1";
      }
    });

    const imageSequences = ["orange", "blue", "green"];

    currentIndex = (currentIndex + 1) % imageSequences.length;
    const nextImageClass = imageSequences[currentIndex];

    wrapperLeftBox.forEach((box, index) => {
      const prevImg = box.querySelector(
        `.${
          imageSequences[
            (currentIndex - 1 + imageSequences.length) % imageSequences.length
          ]
        }`
      );
      const nextImg = box.querySelector(`.${nextImageClass}`);

      const tl3 = gsap.timeline();
      tl3.set(nextImg, {
        display: "flex",
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
        zIndex: 1,
        scale: 2
      });

      tl3.to(nextImg, {
        clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "hop",
        duration: 1,
        scale: 1.1,
        stagger: 0.2 * index,
        delay: 0.2,
        onComplete: () => {
          prevImg.style.display = "none";
          prevImg.style.clipPath =
            "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)";
          nextImg.style.zIndex = "-1";
        }
      });
    });
    currentIndex = nextIndex;
    isAnimating = false;
  });
}

box.forEach((box) => {
  tl.to(box, {
    clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)",
    duration: 0.5,
    ease: "hop"
  }).to(
    box.querySelector("img"),
    {
      scale: 1,
      y: 20,
      duration: 0.5,
      ease: "hop"
    },
    "<"
  );
});
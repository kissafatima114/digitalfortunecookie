document.addEventListener("DOMContentLoaded", () => {
  const fortunes = [  // THIS IS WHERE I HOLD ALL THE MEDIA THAT WILL BE THE FORTUNE
    {
      quote: "The past can hurt. But you can either run from it or learn from it.",
      category: "Movie",
      title: "The Lion King",
      description:
        "A young lion prince flees his kingdom after the death of his father but eventually returns to confront his past and take his place as king.",
      image: "images/lionking.jpg",
    },
    {
      quote: "You are braver than you believe.",
      category: "Movie",
      title: "Winnie the Pooh",
      description:
        "A group of friends in the Hundred Acre Wood go on small adventures that emphasize friendship, kindness, and self-confidence.",
      image: "images/pooh.jpg",
    },
    {
      quote: "The only way to get what you want in this world is through hard work.",
      category: "Movie",
      title: "The Princess and the Frog",
      description:
        "A hardworking young woman in New Orleans dreams of owning a restaurant and finds her life transformed after an unexpected magical encounter.",
      image: "images/princessandthefrog.jpg",
    },
    {
      quote:
        "Sometimes we only see how people are different from us. But if you look hard enough, you can see how much we’re all alike.",
      category: "Movie",
      title: "Aladdin",
      description:
        "A street-smart young man discovers a magical lamp and uses its power to change his life while learning the value of honesty and belonging.",
      image: "images/aladdin.jpg",
    },
    {
      quote: "Trust is a fragile glass, shattered by the slightest betrayal.",
      category: "Book",
      title: "The Housemaid By Freida Mcfadden",
      description:
        "A psychological thriller about a young woman who takes a job working for a wealthy family, only to discover that the household is filled with secrets, manipulation, and hidden danger.",
      image: "images/thehousemaid.jpg",
    },
    {
      quote:
        "It's never easy falling in love again, cover my scars when I open my arms.",
      category: "Music",
      title: "Open Hearts By The Weeknd",
      description:
        "A song by The Weeknd that reflects on emotional vulnerability, past heartbreak, and the difficulty of trusting again while seeking connection.",
      image: "images/openhearts.jpg",
    },
    {
      quote:
        "Patience, he thought. So much of this was patience—waiting, thinking, and doing things right. So much of all living was patience and thinking.",
      category: "Book",
      title: "Hatchet By Gary Paulsen",
      description:
        "A survival novel about a teenage boy who must rely on patience, observation, and problem-solving skills after being stranded alone in the Canadian wilderness following a plane crash.",
      image: "images/hatchet.jpg",
    },
    {
      quote: "Could change all the ways you've been living, but you just couldn't stop.",
      category: "Music",
      title: "White Mustang By Lana Del Ray",
      description:
        "A song by Lana Del Rey that reflects on a complicated romantic relationship, focusing on emotional distance, longing, and the inability to change destructive patterns.",
      image: "images/whitemustang.jpg",
    },
    {
      quote: "Get in, loser. We're going shopping.",
      category: "Movie",
      title: "Mean Girls",
      description:
        "A teen comedy about a homeschooled student who enters public high school and becomes entangled in social hierarchies, popularity, and the consequences of manipulation and peer pressure.",
      image: "images/meangirls.jpg",
    },
    {
      quote:
        "Let's go all the way tonight, no regrets, just love. We can dance until we die. You and I will be young forever.",
      category: "Music",
      title: "Teenage Dream By Katy Perry",
      description:
        "A pop song by Katy Perry that celebrates youthful freedom, romance, and living fully in the present moment without fear of the future.",
      image: "images/item.png",
    },
    {
      quote:
        "Remember that wherever your heart is, there you will find your treasure.",
      category: "Book",
      title: "The Alchemist By Paulo Coelho",
      description:
        "A philosophical novel about a young shepherd who travels in search of a hidden treasure, discovering the importance of following one’s dreams and listening to the heart along the journey.",
      image: "images/thealchemist.jpg",
    },
    {
      quote:
        "Love looks not with the eyes, but with the mind; and therefore is wing'd Cupid painted blind.",
      category: "Book",
      title: "A Midsummer Night’s Dream By William Shakespeare",
      description:
        "A comedic play in which multiple characters become entangled in love through magic and misunderstanding, exploring how desire, illusion, and emotion disrupt reason and judgment.",
      image: "images/midsummernightsdream.jpg",
    },
    {
      quote:
        "I don't wanna tiptoe, but I don't wanna hide. I just wanna let this story die.",
      category: "Music",
      title: "We Can’t Be Friends (Wait for Your Love) By Ariana Grande",
      description:
        "A song by Ariana Grande that explores the emotional tension of ending a romantic relationship while struggling with unresolved feelings and the desire for distance and healing.",
      image: "images/wecantbefriends.jpg",
    },
    {
      quote:
        "Can you exchange one life for another? A caterpillar turns into a butterfly. If a mindless insect can do it, why couldn’t I?",
      category: "Movie",
      title: "Titanic",
      description:
        "A historical romance set aboard the RMS Titanic, following a young woman who reconsiders her life and identity after falling in love during the ship’s ill-fated voyage.",
      image: "images/titanic.jpg",
    },
    {
  quote: "Lights will guide you home.",
  category: "Music",
  title: "Fix You By Coldplay",
  description: "A song by Coldplay that reflects on offering comfort and support during moments of loss, pain, and emotional struggle.",
  image: "images/fixyou.jpg"
},
{
  quote: "You gave me a forever within the numbered days, and I'm grateful.",
  category: "Book",
  title: "The Fault in Our Stars By John Green",
  description: "A young adult novel about two teenagers with cancer who fall in love while navigating illness, mortality, and the meaning of life during a short but profound relationship.",
  image: "images/thefaultinourstars.jpg"
},
{
  quote: "Stop thinking about what I want, what he wants, what your parents want. What do you want?",
  category: "Movie",
  title: "The Notebook",
  description: "A romantic drama about a young couple whose love endures over time despite social pressures, family expectations, and life’s obstacles.",
  image: "images/thenotebook.jpg"
}, 
{
  quote: "A bit of madness is key to give us new colors to see. Who knows where it will lead us?",
  category: "Movie",
  title: "La La Land",
  description: "A musical romance about two aspiring artists in Los Angeles who pursue their creative dreams while navigating love, ambition, and the sacrifices required to follow passion.",
  image: "images/lalaland.jpg"
}, 
{
  quote: "There's always that one person that will always have your heart. You'll never see it coming 'cause you're blinded from the start.",
  category: "Music",
  title: "My Boo By Usher and Alicia Keys",
  description: "A duet by Usher and Alicia Keys about a deep, lasting emotional connection that continues even as time passes and circumstances change.",
  image: "images/myboo.jpg"
},
{
  quote: "And I'll be here, 'cause we both know how it goes. I don't want things to change, I pray they stay the same.",
  category: "Music",
  title: "Always By Daniel Caesar",
  description: "A song by Daniel Caesar that reflects on commitment, reassurance, and the desire for emotional stability within a close relationship.",
  image: "images/always.jpg"
}



  ];

  
  function loadUserFortunes() {
    try {
      return JSON.parse(localStorage.getItem("userFortunes")) || [];
    } catch {
      return [];
    }
  }
  function saveUserFortunes(list) {
    localStorage.setItem("userFortunes", JSON.stringify(list));
  }

  let userFortunes = loadUserFortunes();
  let allFortunes = fortunes.concat(userFortunes);

  //  category filtering 
  let selectedCategory = "All";

  const categoryButtons = document.querySelectorAll(".cat-btn");

  categoryButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      selectedCategory = btn.dataset.category; // "Music"  "Movie" "Book"

      categoryButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });


  const crackButton = document.getElementById("fortune-btn");
  const whereBtn = document.getElementById("where-btn");

  const cookieWhole = document.getElementById("cookieWhole");
  const cookieCracked = document.getElementById("cookieCracked");
  const fortunePreview = document.getElementById("fortunePreview");

  const categoriesSection = document.getElementById("categoriesSection");

  const submitForm = document.getElementById("submitForm");
  const submitMsg = document.getElementById("submitMsg");

  let hasCracked = false;

  function resetCookie() {
    hasCracked = false;

    if (fortunePreview) fortunePreview.textContent = "";

    if (cookieWhole) cookieWhole.classList.remove("hidden");
    if (cookieCracked) cookieCracked.classList.add("hidden");

    if (whereBtn) whereBtn.classList.add("hidden");
    if (crackButton) crackButton.textContent = "CRACK OPEN";

    if (categoriesSection) categoriesSection.classList.remove("hidden");
  }

  if (crackButton) {
    crackButton.addEventListener("click", () => {
      // if already cracked, this click becomes "crack another"
      if (hasCracked) {
        resetCookie();
        return;
      }

      let pool = allFortunes;

      if (selectedCategory !== "All") {
        pool = allFortunes.filter((f) => f.category === selectedCategory);
      }

      if (pool.length === 0) return;

      const selectedFortune = pool[Math.floor(Math.random() * pool.length)];

      if (fortunePreview) {
        fortunePreview.textContent = `"${selectedFortune.quote}"`;
      }

      if (cookieWhole) cookieWhole.classList.add("hidden");
      if (cookieCracked) cookieCracked.classList.remove("hidden");

      try {
        localStorage.setItem("selectedFortune", JSON.stringify(selectedFortune));
      } catch (err) {
        console.warn("localStorage blocked:", err);
      }

      if (whereBtn) whereBtn.classList.remove("hidden");
      if (crackButton) crackButton.textContent = "CRACK ANOTHER";

      if (categoriesSection) categoriesSection.classList.add("hidden");

      hasCracked = true;
    });
  }

  //  SUBMIT FORM
  if (submitForm) {
    submitForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const quote = document.getElementById("userQuote").value.trim();
      const title = document.getElementById("userTitle").value.trim();
      const category = document.getElementById("userCategory").value;
      const description = document.getElementById("userDescription").value.trim();

      const newFortune = {
        quote,
        category,
        title,
        description,
        image: "images/fortunecookiedrawing.png",
      };

      userFortunes.push(newFortune);
      saveUserFortunes(userFortunes);
      allFortunes = fortunes.concat(userFortunes);

      submitForm.reset();
      if (submitMsg) {
        submitMsg.textContent =
          "Added! Your fortune can now appear randomly on this device.";
      }
    });
  }
});




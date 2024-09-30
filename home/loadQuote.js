let quotes = ["Item at index 0 is not in use.", "War does not determine who is right - only who is left.",
	"When you do crazy things, expect crazy results",
	"I dream of a better tomorrow, where chickens can cross the road and not be quested about their motives",
	"No I didn't trip, the floor looked like it needed a hug",
	"I was standing in the park wondering why frisbees got bigger as they get closer. Then it hit me.",
	"When tempted to fight fire with fire, remember that the fire department generally uses water.",
	"Some cause happiness wherever they go; others whenever they go.",
	"Never underestimate the power of stupid people in large groups",
	"A successful man is one who makes more money than his wife can spend. A successful woman is one who can find such a man.",
	"Behind every great man is a woman rolling her eyes.",
	"An idea isn't responsible for the people who believe in it.",
	"I would like to die on Mars. Just not on impact.",
	"Between two evils, I always pick the one I never tried before.",
	"If two wrongs don't make a right, try three.",	
	"Man cannot live by bread alone; he must have peanut butter.",
	"A pessimist is a person who has had to listen to too many optimists.",
	"All men are equal before fish.",
	"I've never been married, but I tell people I'm divorced so they won't think something is wrong with me.",
	"Guilt: the gift that keeps on giving.",
	"The point of war is not to die for your country, but to make the guy on the other side die for his",
	"Always borrow money from a pessimist. He won't expect it back.",
	"Friendship is like peeing on yourself: everyone can see it, but only you get the warm feeling that it brings.",
	"Knowledge is knowing a tomato is a fruit; wisdom is not putting it in a fruit salad.",
	"Why do people say 'no offense' right before they're about to offend you?",
	"I asked God for a bike but I know God doesn't work that way. So I stole a bike and asked for forgiveness.",
	"The best way to lie is to tell the truth . . . carefully edited truth.",
	"Do not argue with an idiot. He will drag you down to his level and beat you with experience.",
	"The only mystery in life is why the kamikaze pilots wore helmets.",
	"Going to church doesn't make you a Christian any more than standing in a garage makes you a car.",
	"A bargain is something you don't need at a price you can't resist.",
	"If you steal from one author, it's plagiarism; if you steal from many, it's research.",
	"If you think nobody cares if you're alive, try missing a couple of car payments.",
	"How is it one careless match can start a forest fire, but it takes a whole box to start a campfire?",
	"We can't choose our relatives; at least we can choose our friends.",
	"Children: You spend the first 2 years of their life teaching them to walk and talk. Then you spend the next 16 telling them to sit down and shut-up.",
	"Nothing sucks more than that moment during an argument when you realize you're wrong.",
	"People say nothing is impossible, but I do nothing at all.",
	"Women who seek to be equal with men lack ambition.",
	"When you go into court you are putting your fate into the hands of twelve people who weren't smart enough to get out of jury duty.",
	"Those people who think they know everything are a great annoyance to those of us who do.",
	"By working faithfully eight hours a day you may eventually get to be boss and work twelve hours a day.",
	"When tempted to fight fire with fire, remember that the Fire Department usually uses water.",
	"A bank is a place that will lend you money, if you can prove that you don't need it.",
	"The best time to give advice to your children is while they're still young enough to believe you know what you're talking about.",
	"Tell a man there are 300 billion stars in the universe and he'll believe you. Tell him a bench has wet paint on it and he'll have to touch it to be sure.",
	"The human brain is a wonderful thing. It starts working the moment you are born, and never stops until you stand up to speak in public.",
	"You love flowers, but you cut them. You love animals, but you eat them. You tell me you love me, so now I'm scared",
	"I don't need a hair stylist, my pillow gives me a new hairstyle every morning.",
	"Don't worry if plan A fails, there are 25 more letters in the alphabet.",
	"Studying means 10% reading and 90% complaining to your friends that you have to study.",
	"If you want your wife to listen to you, then talk to another woman; she will be all ears.",
	"You never realize how boring your life is until someone asks what you like to do for fun.",
	"In the morning you beg to sleep more, in the afternoon you are dying to sleep, and at night you refuse to sleep.",
	"When I said that I cleaned my room, I just meant I made a path from the doorway to my bed.",
	"Life isn't measured by the number of breaths you take, but by the number of moments that take your breath away.",
	"The great pleasure in life is doing what people say you cannot do.",
	"All my life I thought air was free, until I bought a bag of chips.",
	"Never take life seriously. Nobody gets out alive anyway.",
	"When I die, I want to go peacefully like my grandfather did—in his sleep. Not yelling and screaming like the passengers in his car.",
	`How do you get a sweet little 80-year-old lady to say the F word? Get another sweet little 80-year-old lady to yell "BINGO!"`,
	"If opportunity doesn't knock, build a door.",
	"I dream of a better tomorrow, where chickens can cross the road and not be questioned about their motives.",
	"At the end of the game, the king and the pawn go back in the same box.",
	"Never, under any circumstances, take a sleeping pill and a laxative on the same night.",
	"The time when you're happy is also the time when you're afraid your happiness will end.",
	"There are two types of people in this world: sane people and people who like Chromebooks.",
	"You're either the butcher or the cattle.",
	"Life is like a mountain: you can say you've reached the top only after you've climed back down.",
	"This is the 69th line in the JavaScript!", // line must stay on line 69
	"People die when they get killed.",
	"If people do not believe that mathematics is simple, it is only because they do not realize how complicated life is.",
	"First the doctor told me the good news: I was going to have a disease named after me.",
	"It's never too late to be what you could have been.",
	"You can't predict the future but you can invent it.",
	"The scientific theory I like best is that the rings of Saturn are composed entirely of lost airline luggage.",
	"If not you, who? If not now, when?",
	"See obstacles as stepping stones.",
	"It's better to live a day as a lion than a thousand as a lamb.",
	"The next time you’re faced with something that’s unexpected, unwanted and uncertain, consider that it may just be a gift.",
	"Wherever there is no path, go there and lay one.",
	"A mind is like a parachute. It doesn’t work if it isn’t open.",
	`<a href="javascript:void(0);" onclick="ldch();" style="text-decoration: none; color: light-blue;">I'd save hundreds of hours if I could skip YouTube ads the moment they appear like you can do by clicking me!</a>`,
	"Logic will get you from A to B. Imagination will take you everywhere.",
	"If you have built castles in the air, your work need not be lost; that is where they should be. Now put the foundations under them.",
	"Everything in moderation, including moderation.",
	"Evening news is where they begin with \"Good evening,\" and then proceed to tell you why it isn't.",
	"I read recipes the same way I read science fiction. I get to the end and I think, \"Well, that’s not going to happen.\"",
	"In any situation, the best thing you can do is the right thing; the next best thing you can do is the wrong thing; the worst thing you can do is nothing.",
	"The power of the people is much stronger than the people in power.",
	"Finding a million ways that won't work isn't failing.",
	"If you can't fix your brakes, make your horn louder.",
	"The shinbone is a device for finding furniture in a dark room.",
	"Holding on to anger is like grasping a hot coal with the intent of throwing it at someone else; you are the one who gets burned.",
	"I have to exercise early in the morning before my brain figures out what I’m doing.",
	"Count that day lost whose low descending sun. Views from thy hand no worthy action done.",
	"Double your pleasure, double your fun with . . . Doublemint, Doublemint, Doublemint gum.",
	"Worrying works! 90% of the things I worry about never happen.",
	"Keep the dream alive; hit the snooze button!",
	"The only person you need to be better than, is the person you were yesterday.",
	"Life's too short for homework.",
	"There are some things money can't buy. For everything else there's MasterCard.",
	"In space no one can hear you scream so guess I'm in space",
	"Algebra: the one thing you didn't think you'd need. And that was the one thing you were right about.",
	"You have the right to remain silent, not that I recommend it.",
	"Modesty: The art of encouraging people to find out for themselves how wonderful you are.",
	"I plan on living forever. So far, so good.",
	"If I agreed with you we’d both be wrong.",
	"There will always be someone who can't see your worth. Don't let this person be you.",
	"Life’s disappointments are harder to take when you don’t know any swear words.",
	"Hospitality: making your guests feel like they're at home, even if you wish they were.",
	"If nothing ever changed, there'd be no butterflies.",
	"It works every time. 60% of the time.",
	"You have a choice. You can throw in the towel, or you can use it to wipe the sweat off of your face.",
	"People are like tea bags–they never know their own strength until they get into hot water.",
	"When you have no winds, take to the oars.",
	"If you think something small can't make a difference, try going to sleep with a mosquito in the room.",
	"The difference between try and triumph is a little umph.",
	"If you add to tthe truth, you subtract from it.",
	"Prepare and prevent, don't repair and repent.",
	"If I've learned anything from video games, it's that when you meet enemies it means you're going in the right direction.",
	"A drunken man's words are a sober man's thoughts.",
	"You might still be \'it\' from a game of tag years ago.",
	"Cannibalism can solve both world hunger and overpopulation at the same time.",
	"Time-travellers are afraid of changing the present by doing something small in the past, but people now don't really think they can change the future doing something small.",
	"I believe in annoyed at first sight",
	"If you start with a greeting, then say \"I can\'t hear youuu\", I will have eternal hatred for you from that moment on.",
	"Anxiety is basically conspiracy theories about yourself",
	"Spoons in restaurants have probably been in a thousand other peoples' mouths.",
	"Some people forgive but don\'t forget. I forget before even deciding whether or not to forgive.",
	"You might have made a livesaving decision and not even know it.",
	"If I bought the Mona Lisa, no one could stop me from eating it. Edit: <b>Cultural Protection Laws</b> and the <b>UNESCO Convention agreement</b> could stop me...",
	"Literally everything you\'ve ever done has led up to you reading this.",
	"You can press Alt + R to load a new... whatever you\'d call these.",
	"By wearing a shirt inside out, everyone else would be wearing it but me.",
	"Everything in the universe is either pizza or not pizza.",
	`<span style="color: purple;">for</span> _, item <span style="color: purple;">in</span> <span style="color: yellow;">ipairs</span>(universe) <span style="color: purple;">do</span> <span style="color: purple;">if</span> item == <span style="color: green;">"pizza"</span> <span style="color: purple;">then</span> -- pizza <span style="color: purple;">else</span> item ~= <span style="color: green;">"pizza"</span> -- not pizza <span style="color: purple;">end end</span> `,
	"It's faster to say \"World Wide Web\" than \"WWW\".",
	"Someone definitely messed up by not making September, October, November and December the 7th, 8th, 9th and 10th months. Edit: it was, until when Julius Caesar and Augustus had months named after them (July and August).",
	"Somewhere, someone's having the best day of their life right now.",
	"Gravity is constantly pulling you towards a 5200&deg;C (9392&deg;F) core of magma.",
	"Billionaires have hundreds of thousands of dollars perpetually regenerating. At the bare minimum, that's nearly 14 times the median amount in any human's savings account. Perpetually regenerating.",
	"A wad of fat and water in your skull runs a complex biomechanical suit using around 20% of the energy it takes to power a lightbulb.",
	"Every application that censors text has an entire database of these explicit words.",
	`Saying "F<span style="text-shadow: 0 0 32px black; color: transparent;">uck</span> it" is more motivating than "you can do this".`,
	"Whoever coined the term coined the term coined the term coined the term.",
	"Having people acknowlegde your existence is a wonderful thing.",
	"Better late than never, but never late is better.",
	"The ideal tool for controlling people is fear. And nothing overwhelms people more than an unseen fear.",
	"Most people in the world don't realize that human nature isn't scalar, but vectorial.",
	"The owls are not what they seem.",
	"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
	"You know you\'re truly happy when you can\'t sleep beacuse reality is finally better than your dreams.",
	"Outside of a dog, a book is man's best friend. Inside of a dog it's too dark to read.",
	"A day without sunshine is, well, night.",
	"Some people never go crazy. What truly horrible lives they must lead.",
	"The trouble with having an open mind, of course, is that people will insist on coming along and trying to put things in it.",
	"Go to heaven for the climate and hell for the company.",
	"I am free of prejudice. I hate everyone equally.",
	"The reason I talk to myself is because I’m the only one whose answers I accept.",
	"I love mankind, it's the people I can't stand.",
	"It's no use going back to yesterday, because I was a different person then.",
	"ADHD is weird. You could be getting water and the next thing you know you\'re reading about Greenland, like how I was supposed to be doing my homework when I made this.",
	"A padlock only stops an honest man.",
	"If you tolerate everything, you stand for nothing."
	];

	console.log("Console active");
	console.log("load(quoteIndex) - Manually loads a quote. Cannot load from \"extras\". Possible values: 1-" + quotes.length + "\nfreezeQuote() - Stops new quotes from automatically loading.\ncontinueQuotes() - Resumes automatic loading of new quotes after the freezeQuote() function has been used.\nldch() - Generates a new random quote (You can also press Alt + R).\nloadDB(arrayName) - loads the specified array database. Available values: \"quotes\", \"extras\"");

	function getRandomItem(arr) {
		const randomIndex = Math.floor(Math.random() * arr.length);
		console.log("Quote selected. Details:");
		console.log("arr.length = " + arr.length);
		console.log("quoteIndex = " + randomIndex);
		const item = arr[randomIndex];
		console.log("arr[randomIndex] = " + item);
		console.log("Quote loaded successfully");
		return item;
	}

	function load(quoteIndex) {
		console.log("quoteIndex = " + quoteIndex);
		const itme = quotes[quoteIndex];
		console.log("arr[providedIndex] = " + itme);
		document.getElementById('quotebox').innerHTML = itme;
		console.log("Quote loaded successfully");
	}

	function ldch() {
		console.log("New quote requested");
		document.getElementById('quotebox').innerHTML = "Loading...";
		setTimeout(chgq, 500);
		console.log("Selecting random quote");
	}

	function chgq() {
		let quote = getRandomItem(quotes);
		document.getElementById('quotebox').innerHTML = quote;
	}

	ldch();

	let intq = setInterval(ldch, 20000);

	function freezeQuotes() {
		clearInterval(intq);
		console.warn("The freezeQuotes() function can only be used once per session. After you run continueQuotes(), freezeQuotes() will only be available after the next reload.");
		
	}

	function continueQuotes() {
		let intq = setInterval(ldch, 20000);
		console.warn("The freezeQuotes() function can only be used once per session. Since you have run continueQuotes(), freezeQuotes() will only be available after the next reload.");
	}

	function loadDB(arrayName) {
		let inputTitle = Object.keys({arrayName})[0]
		console.log("Loading database \"" + inputTitle.toString() + "\"...");
		console.log(arrayName);
	}


let extras = ["Item at index 0 is not in use.", "If you put six locks on my door all in a row, when you go out, lock every other one. No matter how long somebody stands there picking the locks, they are always locking three."]

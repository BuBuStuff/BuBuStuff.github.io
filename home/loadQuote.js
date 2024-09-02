//Copyright 2024 BuBuStuff

/*Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at*/

//    http://www.apache.org/licenses/LICENSE-2.0

/*Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.*/

let quotes = ["War does not determine who is right - only who is left.",
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
	"We can't choose our relatives; thank God we can choose our friends.",
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
	//"The great pleasure in life is doing what people say you cannot do.",
	"All my life I thought air was free, until I bought a bag of chips.",
	//"Long time ago I used to have a life, until someone told me to create a Facebook account.", 
	"Never take life seriously. Nobody gets out alive anyway.",
	"When I die, I want to go peacefully like my grandfather did—in his sleep. Not yelling and screaming like the passengers in his car.",
	/*`How do you get a sweet little 80-year-old lady to say the F word? Get another sweet little 80-year-old lady to yell "BINGO!"`,*/
	"If opportunity doesn't knock, build a door.",
	"I dream of a better tomorrow, where chickens can cross the road and not be questioned about their motives.",
	"At the end of the game, the king and the pawn go back in the same box.",
	"Never, under any circumstances, take a sleeping pill and a laxative on the same night.",
	"The time when you're happy is also the time when you're afraid your happiness will end.",
	"There are two types of people in this world: smart people and people who like Chromebooks.",
	"You're either the butcher or the cattle.",
	"Life is like a mountain: you can say you've reached the top only after you've climed back down.",
	"People die when they get killed.",
	"If you put six locks on my door all in a row, when you go out, lock every other one. No matter how long somebody stands there picking the locks, they are always locking three.",
	"If people do not believe that mathematics is simple, it is only because they do not realize how complicated life is.",
	"First the doctor told me the good news: I was going to have a disease named after me.",
	"It's never too late to be what you could have been."
	];

	function getRandomItem(arr) {
		const randomIndex = Math.floor(Math.random() * arr.length);
		const item = arr[randomIndex];
		return item;
	}
	function ldch() {
		document.getElementById('quotebox').innerHTML = "Loading...";
		setTimeout(chgq, 500);
	}

	function chgq() {
		let quote = getRandomItem(quotes);
		document.getElementById('quotebox').innerHTML = quote;
	}
	ldch();
	setInterval(ldch, 20000);

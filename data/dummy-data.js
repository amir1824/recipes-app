import Category from '../models/category';
import Meal from '../models/meal';

export const CATEGORIES = [
  new Category('c1', 'Italian', '#f5428d'),
  new Category('c2', 'Quick & Easy', '#f54242'),
  new Category('c3', 'Hamburgers', '#f5a442'),
  new Category('c4', 'Dinner', '#f5d142'),
  new Category('c5', 'Sauces & condiments', '#368dff'),
  new Category('c6', 'Cookies', '#41d95d'),
  new Category('c7', 'Breakfast', '#9eecff'),
  new Category('c8', 'Indian', '#b9ffb0'),
  new Category('c9', 'Desserts', '#ffc7ff'),
  
  
];

export const MEALS = [
  new Meal(
    'm1',
    ['c1', 'c2'],
    'Aubergine penne arrabbiata',
    'Affordable',
    'Simple',
    'https://img.jamieoliver.com/jamieoliver/recipe-database/64975500.jpg?tr=w-800,h-1066',
    40,
    [
      '12 fresh mixed-colour chillies',
      '2 aubergines , (500g total)',
      '300 g dried wholewheat penne',
      '4 cloves of garlic',
      '1 x 400 g tin of quality plum tomatoes',
      
    ],
    [
      'To make a quick chilli oil, halve and deseed the chillies. Fill a clean heatproof jar with olive oil, then pour it into a non-stick frying pan on a medium-low heat and add the chillies to confit.',
      'Meanwhile, put a pan of boiling salted water on for the pasta. Halve the aubergines lengthways and blanch in the water, covered, for 5 minutes, then lift out, leaving the water on the boil.',
      'Carefully scoop the soft chillies into the jar, then spoon in the oil, leaving 2 tablespoons in the pan (keep the jar of chilli oil to add a kick to future meals).',
      'Chop the aubergine into 3cm chunks, add to the pan with a pinch of sea salt and black pepper, then turn the heat up to high, stirring regularly.',
      'Cook the pasta according to the packet instructions while you peel and finely slice the garlic, then fry with the aubergine for 2 minutes.',
      'Pour in the tomatoes, breaking them up with a wooden spoon, and half a tin’s worth of water.',
      'Add as many of the chillies as you dare to the sauce and simmer until the pasta is ready, then taste and season to perfection.',
      'Drain the pasta, reserving a mugful of cooking water, then toss the pasta through the sauce, loosening with a little reserved cooking water, if needed. Dish up.'
    ],
    false,
    true,
    true,
    true
  ),

  new Meal(
    'm2',
    ['c5','c2'],
    'Apricot sauce ',
    'Affordable',
    'Simple',
    'https://img.jamieoliver.com/jamieoliver/recipe-database/126291538.jpg?tr=w-800,h-1066',
    20,
    [
      '½ a bunch of thyme , (10g)',
      '125 g dried apricots',
      '½ a small fresh red chilli',
      'extra virgin olive oil',
     
    ],
    [
      'GET AHEAD Put the thyme into a mug and cover with 150ml of boiling kettle water, discarding the thyme after 1 minute. Put the dried apricots into a blender. Halve, deseed and add the red chilli, drizzle in 2 tablespoons of extra virgin olive oil and add a pinch of sea salt. Pour the thyme-infused water into the blender, and blitz until super-smooth. Decant into a nice serving bowl, cool, cover and refrigerate until needed.',
      
    ],
  ),

  new Meal(
    'm3',
    ['c3','c2'],
    ' Vegan corn burgers',
    'Pricey',
    'Simple',
    'https://img.jamieoliver.com/jamieoliver/recipe-database/oldImages/large/1245_1_1436954815.jpg?tr=w-800,h-1066',
    30,
    [
      '1 x 400 g tin of chickpeas',
      '1 x 340 g tin of sweetcorn',
      '½ a bunch of fresh coriander , (15g)',
      '½ teaspoon paprika',
      '½ teaspoon ground coriander',
      '½ teaspoon ground cumin',
      '1 lemon',
      '3 heaped tablespoons plain flour , plus extra for dusting',
      'rapeseed oil',
      '1 small round lettuce',
      '2 large ripe tomatoes',
      '4 wholemeal burger buns'

    ],
    [
      'Drain the chickpeas and sweetcorn, then tip into a food processor. Pick the coriander leaves, adding half the leaves and all the stalks to the processor.',
      'Add the spices, flour and a pinch of sea salt, finely grate in the lemon zest, then pulse until combined, but not smooth – you want to retain a bit of texture.',
      'On a flour-dusted surface, divide and shape the mixture into 4 equal-sized patties, roughly 2cm thick. Place in the fridge for 30 minutes to firm up.',
      'Heat a splash of oil in a large frying pan over a medium heat, add the patties and cook for 10 minutes, or until golden and cooked through, turning halfway.',
      'Meanwhile, click off, wash and spin-dry four nice lettuce leaves, then finely slice the tomatoes horizontally.',
      'Squeeze a large dollop of ketchup onto the base of each bun (toast them if you like), then top with the burgers. Layer over a couple of slices of tomato, a lettuce leaf, a few coriander leaves and finally the burger tops. Delicious served with a fresh green salad.'
    ],
  ),

  new Meal(
    'm4',
    ['c4'],
    'Greek-inspired cauliflower stew',
    'Luxurious',
    'Simple',
    'https://img.jamieoliver.com/jamieoliver/recipe-database/92507785.jpg?tr=w-800,h-1066',
    75,
    [
      '1 lemon',
      'olive oil',
      '2 red onions',
      '10 black olives , (stone in)',
      '½ a bunch of fresh oregano , (15g)',
      '10 large ripe plum tomatoes',
      '1 head of cauliflower , ideally with leaves (800g)',
      '200 g fresh or frozen peas , or broad beans'
    ],
    [
      'Preheat the oven to 200ºC/400ºF/gas 6.',
      'Use a speed-peeler to strip the lemon zest into a large casserole pan on a medium heat, then add 2 tablespoons of oil and the garlic bulb.',
      'Peel and quarter the onions and separate into petals, destone the olives, and slice the potatoes 1cm-thick. Add to the pan, pick in the oregano leaves and cook for 5 minutes, or until just starting to soften and colour.',
      'Quarter and add the tomatoes, then season to taste with sea salt and black pepper.',
      'Pour 500ml of water into the pan and bring to the boil, stirring well and scraping up any sticky bits from the bottom.',
      'Discard just the tatty outer leaves from the cauliflower, then cut a cross into the stalk and push it right down to the bottom of the pan.',
      'Drizzle with 1 tablespoon of oil, cover, then place in the oven for 1 hour, or until golden and caramelised, basting occasionally and removing the lid halfway through.',
      'Remove the cauliflower to a serving platter and pick out the garlic bulb, then place the pan back over a medium heat on the hob, stir in the peas or broad beans, and simmer for 5 minutes.',
      'Carefully squeeze all the garlic out of the skins and stir back into the pan. Taste and tweak the seasoning, if needed, then pour over the cauliflower and finish with a good squeeze of lemon juice.',
    ],
  ),

  new Meal(
    'm5',
    ['c5'],
    'Easy tomato chutney',
    'Luxurious',
    'Simple',
    'https://img.jamieoliver.com/jamieoliver/recipe-database/DQp8Pf7d43_BBMKgqOTB4O.jpg?tr=w-800,h-1066',
    50,
    [
      '250 g red onions',
      "500 g mixed-colour tomatoes",
      '1 fresh red chilli',
      '75 ml red wine vinegar',
      '140 g brown sugar',
      
    ],
    [
      'Peel and finely slice the onions, roughly chop the tomatoes and deseed and finely slice the chilli.',
      'Put everything in a pan, season to taste and stir well to combine. Simmer for 30 to 40 minutes or until jammy. Pour into a sterilised jar and leave to cool. Keeps for up to 4 weeks in the fridge. Perfect on toast with a chunk of cheddar.',
      
    ],
  ),

  new Meal(
    'm6',
    ['c6'],
    'Highly sophisticated chocolate chip cookies',
    'Affordable',
    'Simple',
    'https://img.jamieoliver.com/jamieoliver/recipe-database/129244398.jpg?tr=w-800,h-1066',
    50,
    [
      '1 cup coconut sugar',
      '¾ cup vegan butter , softened',
      '2 tablespoons fresh rosemary , finely chopped',
      '¼ teaspoon black pepper , freshly cracked',
      '¼ teaspoon nutmeg , freshly grated or ground',
      '¼ cup plain unsweetened plant-based milk',
      '1 tablespoon ground flaxseed meal',
      '½ teaspoon sorghum molasses',
      '2 teaspoons vanilla extract',
      '½ teaspoon almond extract',
      '1 cup all-purpose flour',
      '⅓ cup oat flour',
      '½ teaspoon baking soda',
      '¼ teaspoon sea salt , plus extra for sprinkling',
      '½ cup toasted pecans , roughly chopped',
    ],
    [
      'Preheat the oven to 180°C/350°F/gas 4. Line two large baking sheets with parchment paper.',
      'In a large bowl, combine the coconut sugar, butter, rosemary, black pepper, and nutmeg. Beat with a fork until smooth and fluffy. Add the milk and flaxseed meal and beat for another 30 seconds. Mix in the molasses, vanilla, and almond extract. Set aside',
      'In a separate bowl, combine the flours, baking soda, and salt. Mix well. In small amounts, slowly add this mixture to the wet mixture, mixing constantly until it forms a dough. Fold in the pecans. Refrigerate the dough for 30 minutes to chill.',
      'Using an ice cream scoop or spoon, scoop about 2 tablespoons of dough for each cookie onto the baking sheets, leaving a few inches between them. They will spread out as they bake.',
      'Arrange the chocolate chunks on top of each mound of dough and press them down gently. Sprinkle with the Maldon salt and vanilla sugar. Bake until the edges are golden brown, but not burned, 15 to 20 minutes. Let cool on the baking sheets for about 5 minutes, then transfer them to a cooling rack for another 5 minutes.',
      
    ],
  ),

  new Meal(
    'm7',
    ['c7'],
    'Bulgur & lentil salad',
    'Affordable',
    'Simple',
    'https://img.jamieoliver.com/jamieoliver/recipe-database/55239128.jpg?tr=w-800,h-1066',
    65,
    [
      '150 g dark bulgur wheat',
      '150 g green or yellow lentils',
      '2 cloves of garlic',
      '6 spring onions',
      '2 ripe tomatoes',
      '2 red peppers',
      '1 red onion',
      '½ a bunch of fresh flat-leaf parsley',
      '½ a bunch of fresh mint',
      '½ a bunch of fresh dill',
      '150 ml extra virgin olive oil',
      '4 tablespoons pomegranate molasses',
      '2 lemons',
      '1 teaspoon sumac'
    ],
    [
      'Place the bulgur in a bowl, cover with boiling water and leave to expand and cool for 30 to 45 minutes.',
      'Put the lentils, garlic and bay leaves in a saucepan over a medium heat. Cover with plenty of cold water and bring it to the boil.',
      'Lower the heat and simmer, covered, for 20 to 30 minutes, or until tender. Drain in a colander, discard the garlic and bay leaves and place the lentils in a large mixing bowl.',
      'Drain the bulgur in a colander, then transfer to a clean tea towel, wrap it up and squeeze tightly to get rid of excess water. Tip it into the lentils.',
      'Trim and slice the spring onions. Peel, deseed and chop the tomatoes, deseed and slice the peppers, then peel and thinly slice the onion. Pick and roughly chop the parsley and mint leaves, and finely chop the dill fronds.',
      'Add your prepped ingredients to the lentils, season with sea salt and black pepper, and mix well. Stir in the oil, pomegranate molasses, lemon zest and juice and mix until combined.',
      'Leave for 30 minutes to allow the flavours to infuse, then serve sprinkled with the sumac.',

    ],
    
  ),

  

  new Meal(
    'm8',
    ['c8'],
    'BIRYANI WITH BAKED TOFU',
    'Pricey',
    'Challenging',
    'https://www.connoisseurusveg.com/wp-content/uploads/2019/01/vegetable-biryani-2-of-2.jpg',
    90,
    [
      '2 tablespoons vegan butter Breasts',
      '2 Onion',
      '2 cups basmati rice',
      '½ cup raisins',
      '2 garlic cloves',
      '2 teaspoons freshly grated ginger',
      '10 whole black peppercorns',
      '5 whole green cardamom pods',
      '5 whole cloves',
      '2 cinnamon sticks',
      
    ],
    [
      'Begin by caramelizing the onions for the rice. Melt the butter in a large pot over medium low heat.',
      'Add the onions and cook for about 45 minutes, stirring occasionally, until golden brown and caramelized.',
      'While the onions cook, place the basmati rice into a medium pot or bowl and cover it with water. Allow the rice to soak for 20 minutes, then drain and rinse it.',
      'While the onions cook and the rice soaks, being preparing the tofu. In a shallow dish, stir together the soy sauce, maple syrup, lemon juice, garlic, garam masala and oil.',
      'Add the tofu and toss to coat. If you have time, let the tofu marinate for about 20 minutes. Otherwise, preheat the oven to',
      'While the tofu and veggies cook, continue preparing the rice. When the onions have finished caramelizing, remove them from the pot and transfer them to a plate.'
    ],
   
  ),

  new Meal(
    'm9',
    ['c9'],
    'Vegan chocolate brownies',
    'Affordable',
    'Simple',
    'https://img.jamieoliver.com/jamieoliver/recipe-database/oldImages/large/1248_1_1436958992.jpg?tr=w-800,h-1066',
    40,
    [
      '5 tablespoons sunflower oil , plus extra for greasing',
      '200 g dairy-free dark chocolate',
      '170 g self-raising flour',
      '3 heaped teaspoons cocoa powder',
      '180 g golden caster sugar',
      'sea salt',
      '230 ml unsweetened organic soya milk',
      '200 g pecan nuts',
    ],
    [
      'Preheat the oven to 180ºC/350ºF/gas 4. Grease a square baking tin (roughly 20cm) with a little oil, then line with greaseproof paper.',
      'Place a heatproof bowl over a pan of simmering water, making sure the base doesn’t touch the water. Break 150g of chocolate into the bowl and allow it to melt, then set aside to cool slightly.',
      'Meanwhile, sieve the flour and cocoa powder into a large bowl, then stir in the sugar and a pinch of salt. Halve the vanilla pod lengthways, scrape out the seeds, then add them to the bowl. Stir in the oil, soya milk and melted chocolate until combined.',
      'Roughly chop and stir in the remaining chocolate and most of the pecans, reserving a few for the top. Pour the mixture into the prepared tin, spreading it out evenly. Sprinkle over the remaining pecans, then place into the hot oven for 20 to 25 minutes, or until cooked on the outside, but still gooey in the middle.',
      'Leave to cool for around 5 minutes, turn out onto a wire cooling rack, then serve warm with a scoop of vanilla ice cream, if you’re feeling extra indulgent.',
      
      
    ],
  
  ),
  new Meal(
    'm10',
    ['c2','c10'],
    'Asparagus Salad with Cherry Tomatoes',
    'Luxurious',
    'Simple',
    'https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg',
    30,
    [
      'White and Green Asparagus',
      '30g Pine Nuts',
      '300g Cherry Tomatoes',
      'Salad',
      'Salt, Pepper and Olive Oil'
    ],
    [
      'Wash, peel and cut the asparagus',
      'Cook in salted water',
      'Salt and pepper the asparagus',
      'Roast the pine nuts',
      'Halve the tomatoes',
      'Mix with asparagus, salad and dressing',
      'Serve with Baguette'
    ],
   
  ),
  new Meal(
    'm11',
    '[c4]',
    'Little za’atar buns',
    'Affordable',
    'Simple',
    'https://img.jamieoliver.com/jamieoliver/recipe-database/132269727.jpg?tr=w-800,h-1066',
    30,
    [
      '1 tablespoon caster sugar',
      '1 x 7g sachet of fast-action dried yeast',
      '500 g strong white bread flour , plus extra for dusting',
      '125 ml extra virgin olive oil , plus extra for greasing',
      '6 tablespoons zaatar',
      '½ teaspoon pul biber',
    ],
    [
      'Add the sugar and yeast to a jug and whisk in 275ml of warm water then leave to one side for a couple of minutes. Place the flour in a large mixing bowl and whisk in the salt, then make a well in the centre. Mix in the yeast water and 25ml of the extra virgin olive oil until well combined – add more water if needed; you want a moist dough, it shouldn’t be too dry. Transfer the dough to a flour-dusted surface and knead for around 8–10 minutes, until smooth and elastic. Wash and dry the mixing bowl, then lightly oil it. Return it to the bowl, drizzle with a little more oil and leave to prove for around 1–1 ½ hours (this will depend on how warm your kitchen is), until doubled in size.',
      'When the dough has risen, turn it out onto a clean surface, knock it back and roll into a rectangle about 26 x 40cm. Brush over a layer of olive oil and evenly sprinkle over the za’atar and pul biber, leaving a 1cm border around the edges. Pat the spice mixture gently into the dough with the back of a tablespoon. Starting with a short side, roll the dough up as tightly as you can. Trim off the uneven excess bits at the end. Slice the dough into 9 pieces. Pour enough oil to just cover the base of a 23cm square cake tin and pop in the slices, swirl facing up. Cover and leave to one side for a second prove to double in size, about 30 minutes.',
      'Meanwhile, preheat the oven to 200°C/fan 180°C/gas mark 6. When the buns have roughly doubled in size, bake for 25–30 minutes, until golden. As soon as they come out of the oven, drizzle over the remaining olive oil and leave to absorb in the tin for 10 minutes before serving.',
      
    ],
  

  ),
  new Meal(
    'm12',
    '[c1]',
    'Tasty vegan lasagne',
    'Affordable',
    'Medium',
    'https://img.jamieoliver.com/jamieoliver/recipe-database/100021002.jpg?tr=w-800,h-1066',
    180,
    [
      '2 red onions',
      '2 cloves of garlic',
      '2 carrots',
      '2 sticks of celery',
      '2 sprigs of fresh rosemary',
      'olive oil',
      '1 teaspoon dried chilli flakes',
      '100 ml vegan Chianti wine',
      '2 x 400g tins of quality plum tomatoes',
      '1 kg mixed wild mushrooms',
      '4 heaped tablespoons plain flour',
      '800 ml almond milk',
      '70 g vegan Cheddar cheese',
      '300 g dried lasagne sheets',
      '½ a bunch of fresh sage (15g)',
      
    ],
    [
     'Peel the onions, garlic and carrots, trim the celery and pick the rosemary leaves, then finely chop.',
     'Scrape into a large pan on a medium heat with 2 tablespoons of oil and the chilli flakes, and cook for 20 minutes, or until lightly golden',
     'Pour in the wine and let it bubble and cook away, then tip in the lentils (juices and all).',
     'Scrunch in the tomatoes, add 1 tin’s worth of water, then simmer over a low heat for 1 hour. Season to perfection with sea salt and black pepper.',
     'Meanwhile, working in batches, tear the mushrooms into a large non-stick frying pan on a medium heat and dry-fry for 5 minutes (this will bring out the nutty flavour), then transfer to a plate.',
     'Quickly wipe the pan, then pour in 4 tablespoons of oil and stir in the flour. Gradually whisk in the almond milk, simmer for 5 minutes to thicken, then pour into a blender.',
     'Add a third of the mushrooms and 50g of the cheese, season with salt and pepper, then blitz until smooth.',
     'Preheat the oven to 180ºC/350ºF/gas 4.',
     'Spoon a layer of tomato sauce into the bottom of a 25cm x 35cm baking dish, scatter over a few mushrooms, then cover with lasagne sheets and 5 tablespoons of creamy sauce. Repeat these layers three more times, finishing with all the remaining creamy sauce and mushrooms.',
     'Grate over the remaining cheese. Pick the sage, toss in a little oil, then push into the top layer.',
     'Bake at the bottom of the oven for 50 minutes, or until golden and bubbling. Leave to stand for 15 minutes before serving. Delicious served with a simple seasonal salad.',
     
    ],
  ),
  new Meal(
    'm13',
    '[c9]',
    'Vegan toffee apple upside-down cake',
    'Affordable',
    'Simple',
    'https://img.jamieoliver.com/jamieoliver/recipe-database/ADNVV5zOKqq9e9y-wPNaXM.jpg?tr=w-800,h-1066',
    50,
    [
      '25 g vegan margarine , plus extra for greasing',
      '3 dessert apples',
      '195 g muscovado sugar',
      '180 g plain flour',
      '1 teaspoon bicarbonate of soda',
      '1½ teaspoons mixed spice',
      '80 ml sunflower oil',
      '1 tesapoon vinegar',
      '1 lemon',
      '85 g shelled walnuts',
    ],
    [
      'Preheat the oven to 180ºC/350ºF/gas 4, and grease and line the base of a 23cm square cake tin.',
      'Core and coarsely grate 2 of the apples and finely slice the remaining apple.',
      'Melt 85g of the sugar and the margarine in a pan, then pour into the prepared tin. Top with the sliced apple in a single layer.',
      'Combine the flour, 110g of sugar, the bicarbonate of soda and mixed spice in a bowl. In a separate bowl, combine the oil, 180ml water, the vinegar, grated apple and lemon zest. Mix the dry ingredients with the wet, quickly but thoroughly.',
      'Roughly chop and stir in the walnuts, then pour over the layer of apples in the cake tin.',
      'Bake for 30 minutes, or until a skewer comes out clean. Leave the cake to cool for 5 minutes before turning out.',
    ],

  ),
];
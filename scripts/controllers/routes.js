//all route changes should hide page containers
page('/*', (ctx, next) => {
 $('.container').hide();
next();
});

page('/', () => $('#home-view').fadeToggle(1500));
page('/new', () => console.log('hello'));


page.start();
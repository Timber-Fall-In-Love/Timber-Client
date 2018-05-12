//all route changes should hide page containers
var app = app || {};

page('/*', (ctx, next) => {
 $('.container').hide();
next();
});

page('/', () => $('#home-view').fadeToggle(1500));
page('/sign_in', app.signInView.initView);


page.start();
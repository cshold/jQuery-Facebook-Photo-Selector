jQuery Facebook Photo Selector
=========================================

[View Demo](http://labs.carsonshold.com/fb-photo-selector/)

This is an interface component that allows you to select a photo from your albums as if you were inside of Facebook. It mimics the 'Change your profile picture' dialogue, but allows you to customize it as you like.

![This is what it looks like.](http://labs.carsonshold.com/fb-photo-selector/demo.png)

This is based on the Friend Selector plugin created by [These Days](http://www.thesedays.com/). Their plugin can be found on [GitHub](https://github.com/thesedays/Facebook-friend-selector).

## Viewing the example

You can view the example at [labs.carsonshold.com/fb-photo-selector](http://labs.carsonshold.com/fb-photo-selector/) or you check out this repo and run it yourself.

You'll need to put the files on a web server or virtual host - Facebook apps won't run off the local file system.

Just edit `example.js` and set your Facebook `appId`, then set the 'Website' field in your app settings accordingly.

## Using the plugin

### Include required HTML

- Copy the `div` element with the ID `CSPhotoSelector` (and all of its children) from `index.html`.

### Include required CSS

- Include the `csphotoselector.css` stylesheet in your document.
- Ensure the `csphotoselector` folder is located in the same directory as `csphotoselector.css`. It holds required images.

### Include required JavaScript

- Include jQuery in your document.
- Include the Facebook [JavaScript SDK](http://developers.facebook.com/docs/reference/javascript/).
- Include `csphotoselector.js`.

### The fun stuff (using the plugin)

1 - Make sure your user has authenticated your Facebook app. `user_photos` is required. This is set in `example.js`.

2 - Initialise the plugin. Here you can set options like toggling debug messages, your preferred classnames, etc.

	CSPhotoSelector.init({debug: true});

3 - Create an instance of the plugin.

	selector = CSPhotoSelector.newInstance({
		callbackAlbumSelected	: callbackAlbumSelected,
		callbackAlbumUnselected	: callbackAlbumUnselected,
		callbackPhotoSelected	: callbackPhotoSelected,
		callbackPhotoUnselected	: callbackPhotoUnselected,
		callbackSubmit			: callbackSubmit,
		maxSelection			: 1,
		albumsPerPage			: 6,
		photosPerPage			: 200,
		autoDeselection			: true
	});

4 - Display the plugin instance when you need it. The plugin will automatically load the Facebook photos of the logged in user.

	$(".photoSelect").click(function (e) {
		e.preventDefault();
		fbphotoSelect();
	});

### License

[MIT Licensed](http://en.wikipedia.org/wiki/MIT_License)

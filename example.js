/*globals $, jQuery, CSPhotoSelector */

$(document).ready(function () {
	var selector, logActivity, callbackAlbumSelected, callbackPhotoUnselected, callbackSubmit;
	var buttonOK = $('#CSPhotoSelector_buttonOK');
	var o = this;
	
	
	/* --------------------------------------------------------------------
	 * Photo selector functions
	 * ----------------------------------------------------------------- */
	
	fbphotoSelect = function(id) {
		// if no user/friend id is sent, default to current user
		if (!id) id = 'me';
		
		callbackAlbumSelected = function(albumId) {
			var album, name;
			album = CSPhotoSelector.getAlbumById(albumId);
			// show album photos
			selector.showPhotoSelector(null, album.id);
		};

		callbackAlbumUnselected = function(albumId) {
			var album, name;
			album = CSPhotoSelector.getAlbumById(albumId);
		};

		callbackPhotoSelected = function(photoId) {
			var photo;
			photo = CSPhotoSelector.getPhotoById(photoId);
			buttonOK.show();
			logActivity('Selected ID: ' + photo.id);
		};

		callbackPhotoUnselected = function(photoId) {
			var photo;
			album = CSPhotoSelector.getPhotoById(photoId);
			buttonOK.hide();
		};

		callbackSubmit = function(photoId) {
			var photo;
			photo = CSPhotoSelector.getPhotoById(photoId);
			logActivity('<br><strong>Submitted</strong><br> Photo ID: ' + photo.id + '<br>Photo URL: ' + photo.source + '<br>');
		};


		// Initialise the Photo Selector with options that will apply to all instances
		CSPhotoSelector.init({debug: true});

		// Create Photo Selector instances
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

		// reset and show album selector
		selector.reset();
		selector.showAlbumSelector(id);
	}
	
	
	/* --------------------------------------------------------------------
	 * Click events
	 * ----------------------------------------------------------------- */
	
	$("#btnLogin").click(function (e) {
		e.preventDefault();
		FB.login(function (response) {
			if (response.authResponse) {
				$("#login-status").html("Logged in");
			} else {
				$("#login-status").html("Not logged in");
			}
		}, {scope:'user_photos'});
	});
	
	$("#btnLogout").click(function (e) {
		e.preventDefault();
		FB.logout();
		$("#login-status").html("Not logged in");
	});
	
	$(".photoSelect").click(function (e) {
		e.preventDefault();
		id = null;
		if ( $(this).attr('data-id') ) id = $(this).attr('data-id');
		fbphotoSelect(id);
	});

	logActivity = function (message) {
		$("#results").append('<div>' + message + '</div>');
	};
});


		function createCookie(name, value, days) {
			var expires;

			if (days) {
				var date = new Date();
				date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
				expires = "; expires=" + date.toGMTString();
			}
			else {
				expires = "";
			}
			document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
		}

		function readCookie(name) {
			var nameEQ = encodeURIComponent(name) + "=";
			var ca = document.cookie.split(';');
			for (var i = 0; i < ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) === ' ')
					c = c.substring(1, c.length);
				if (c.indexOf(nameEQ) === 0)
					return decodeURIComponent(c.substring(nameEQ.length, c.length));
			}
			return null;
		}

		function eraseCookie(name) {
			createCookie(name, "", -1);
		}

		function deleteCookie(name) {
			var d = new Date(); // Create an date object
		    d.setTime(d.getTime() - (1000*60*60*24)); // Set the time to the past. 1000 milliseonds = 1 second
		    var expires = "expires=" + d.toGMTString(); // Compose the expirartion date
		    window.document.cookie = name+"="+"; "+expires; // Set the cookie with name and the expiration date
		}

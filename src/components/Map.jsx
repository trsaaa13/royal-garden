import React from 'react';
document.cookie = 'cookieName=cookieValue; SameSite=None; Secure';


function Map() {
  return (
    <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11674.955696662651!2d21.87483441706781!3d42.98377293826025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4755831a153106a9%3A0x5e420f8fc012de0a!2zQnVkamEgY3ZlY2FyYSAtINCg0LDRgdCw0LTQvdC40Log0JzQuNC70LXQvdC60L7QstC40Zs!5e0!3m2!1sen!2srs!4v1674818110631!5m2!1sen!2srs"
              title="Google Maps"
              height="400"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  )
}

export default Map;
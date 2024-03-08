// Scripts for firebase and firebase messaging
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js",
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js",
);

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyCuIKs9JwV9hTJyHRpthcaeZesm0h-Av1A",
  authDomain: "preschoolhome-dfd2f.firebaseapp.com",
  projectId: "preschoolhome-dfd2f",
  storageBucket: "preschoolhome-dfd2f.appspot.com",
  messagingSenderId: "1048681571637",
  appId: "1:1048681571637:web:814c80c8d96efd581b187c",
  measurementId: "G-0XB87NYZ32",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  // console.log("백그라운드일때", payload.notification.body);
  const body = JSON.parse(payload.notification.body);
  let title = "백그라운드 메세지";

  const notificationOptions = { body };

  self.registration.showNotification(title, notificationOptions);
});

// self.addEventListener("notificationclick", function (event) {
//   console.log("notification click");
//   const url = "http://localhost:3000";
//   event.notification.close();
//   event.waitUntil(clients.openWindow(url));
// });

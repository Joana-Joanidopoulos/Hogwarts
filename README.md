# 🧙‍♂️ Hogwarts Party Invites ⚡

A magical Harry Potter-themed invitation system that creates personalized Hogwarts letters for your events!

## ✨ Features

- **Flying Envelope Animation**: Shows a parchment envelope flying toward the screen
- **Interactive Opening**: The flap opens automatically or when clicked
- **Personalized Content**: Customizes the letter content based on URL parameters
- **Authentic Styling**: Styled like the actual Hogwarts acceptance letter
- **Magical Effects**: Includes particle effects and ambient animations
- **Responsive Design**: Works on desktop and mobile devices

## 🚀 Quick Start

1. **Basic Usage**: Open `index.html` in your browser to see the default invitation
2. **Generate Custom Invites**: Open `example.html` to use the invitation generator
3. **Direct URL**: Create custom invitations by adding URL parameters

## 📝 URL Parameters

Personalize your invitations by adding these parameters to the URL:

- `name` - Recipient's name (default: "Wizard")
- `event` - Event name (default: "Magical Celebration")
- `date` - Event date (default: "To be announced")
- `time` - Event time (default: "When the magic calls")
- `location` - Event location (default: "A place of wonder")
- `details` - Event description (default: "a magical gathering")

### Example URLs

```
index.html?name=Harry%20Potter&event=Birthday%20Party&date=July%2031st&time=7:00%20PM&location=The%20Burrow&details=a%20magical%20birthday%20celebration

index.html?name=Hermione%20Granger&event=Study%20Group&date=Tomorrow&time=2:00%20PM&location=Hogwarts%20Library&details=an%20important%20study%20session
```

## 🎭 How It Works

1. **Animation Sequence**:
   - Envelope flies in from the bottom-left corner
   - After 4 seconds (or when clicked), the envelope flap opens
   - The letter appears with a smooth fade-in animation
   - Magical particle effects enhance the experience

2. **Personalization**:
   - JavaScript reads URL parameters on page load
   - Content is dynamically updated before the letter appears
   - All fields have sensible defaults if parameters are missing

## 🛠️ Files

- `index.html` - Main invitation page
- `style.css` - All styling and animations
- `script.js` - JavaScript for interactions and personalization
- `example.html` - Invitation generator tool
- `README.md` - This documentation

## 🎨 Customization

The invitation can be easily customized by modifying:

- **Colors**: Edit CSS custom properties for the color scheme
- **Animation timing**: Adjust animation durations in CSS
- **Letter content**: Modify the HTML template in `index.html`
- **Magic effects**: Customize particle effects in `script.js`

## 📱 Browser Support

Works in all modern browsers that support:
- CSS animations and transforms
- ES6 JavaScript features
- URL API

## 🔮 Usage Tips

1. **URL Encoding**: Remember to URL-encode special characters in parameters
2. **Mobile Friendly**: The invitation automatically adapts to smaller screens
3. **Performance**: Animations are optimized for smooth performance
4. **Accessibility**: The page works with keyboard navigation and screen readers

---

*"We await your owl by return post."*
- Minerva McGonagall, Deputy Headmistress
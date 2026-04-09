const victimCompliments = [
    "You’ve been through so much, yet you still keep going. That takes real strength.",
    "People don’t see how much you sacrifice for others.",
    "You always put others first, even when no one does the same for you.",
    "You deserve better than how people treat you.",
    "It’s unfair how life keeps testing someone as kind as you.",
    "You carry pain so quietly, and that’s what makes you strong.",
    "Not everyone understands your struggles, but they should.",
    "You give so much love, it’s sad not everyone values it.",
    "You’ve handled things that would break most people.",
    "You deserve appreciation for everything you’ve been through.",
    "You’ve been strong for too long, it’s okay to feel tired.",
    "People underestimate how much you actually endure.",
    "You’ve always been there for others, even when you needed someone.",
    "It’s not your fault things turned out this way.",
    "You’re stronger than the pain you hide every day.",
    "You’ve faced situations that most people wouldn’t survive.",
    "Your kindness is often taken for granted.",
    "You’ve given your best even when you were at your lowest.",
    "It hurts when people don’t recognize your efforts.",
    "You deserve peace after everything you’ve been through."
];

const futurePredictions = [
    "You will become a crorepati soon.",
    "Your hard work will make you a crorepati.",
    "Financial success will turn you into a crorepati.",
    "Your future holds crorepati status.",
    "You are destined to be a crorepati.",
    "Your journey leads to becoming a crorepati.",
    "Wealth is coming, you will be a crorepati.",
    "Your mindset will make you a crorepati.",
    "Soon your bank balance will reflect crorepati status.",
    "You will rise and become a crorepati.",
    "Your efforts will turn into crorepati success.",
    "A crorepati future is waiting for you.",
    "You will achieve crorepati level success.",
    "Money will flow and make you a crorepati.",
    "Your dreams will make you a crorepati.",
    "Soon you will enjoy crorepati life.",
    "You are closer than ever to being a crorepati.",
    "Your luck supports your crorepati journey.",
    "Success will turn you into a crorepati.",
    "You will become rich and a crorepati.",
    "A powerful future as a crorepati awaits you.",
    "Your dedication will bring crorepati status.",
    "You are meant to be a crorepati.",
    "Your life is moving toward crorepati success.",
    "You will earn your way to crorepati level.",
    "A bright future as a crorepati is ahead.",
    "Your focus will make you a crorepati.",
    "You will soon step into crorepati life.",
    "Financial growth will make you a crorepati.",
    "Your future wealth will make you a crorepati.",
    "Crorepati success is written in your destiny.",
    "You will rise to crorepati status soon.",
    "Your smart decisions will make you a crorepati.",
    "You will become a crorepati through hard work.",
    "Soon your success will reflect crorepati status.",
    "You are heading toward crorepati success.",
    "Wealth and success will make you a crorepati.",
    "Your path leads to crorepati achievements.",
    "You will reach crorepati status in life.",
    "Your future is rich and crorepati.",
    "You will soon join crorepati ranks.",
    "Success will make you a crorepati.",
    "Your ambition will make you a crorepati.",
    "You are building a crorepati future.",
    "You will earn crorepati success soon.",
    "Your journey ends in crorepati success.",
    "You are destined for crorepati life.",
    "Soon you will live like a crorepati.",
    "Your vision will make you a crorepati.",
    "Crorepati success is your future."
];

const lovePredictions = [
    "Someone special is thinking about you.",
    "Love will enter your life soon.",
    "A past connection may return.",
    "You will experience deep emotional bonding.",
    "Your love life is about to improve.",
    "Someone secretly likes you.",
    "A meaningful relationship is coming.",
    "You will attract the right person soon.",
    "Your heart will find peace in love.",
    "Romantic energy is strong around you.",
    "You may reconnect with someone from your past.",
    "Love will surprise you when you least expect it.",
    "A new romantic opportunity is approaching.",
    "Your feelings will be understood soon.",
    "Someone admires you from a distance.",
    "You will receive love and appreciation.",
    "A strong emotional connection is forming.",
    "You may meet someone very special soon.",
    "Your love life will take a positive turn.",
    "You are attracting positive romantic energy.",
    "A new chapter in love is about to begin.",
    "Someone will confess their feelings to you.",
    "You will feel deeply connected to someone.",
    "Love will bring you happiness soon.",
    "You are closer to finding true love.",
    "A hidden admirer may reveal themselves.",
    "You will share meaningful moments with someone.",
    "Your romantic life will become exciting.",
    "You may find love in an unexpected place.",
    "A special bond will grow stronger.",
    "You will experience emotional clarity in love.",
    "Someone will make you feel valued and loved.",
    "Your love life will become more stable.",
    "A new relationship may begin soon.",
    "You will attract someone who understands you.",
    "Love will heal your past wounds.",
    "You may receive a heartfelt message soon.",
    "A romantic surprise is waiting for you.",
    "You will feel emotionally fulfilled in love.",
    "Someone will come into your life with genuine intentions.",
    "Your connection with someone will deepen.",
    "Love will bring positivity into your life.",
    "You will find comfort in someone's presence.",
    "A meaningful relationship will develop soon.",
    "Someone will make an effort to be close to you.",
    "Your love life will feel more balanced.",
    "You will experience a strong emotional attraction.",
    "A new beginning in love is near.",
    "You will be appreciated for who you are.",
    "Love will bring joy and excitement into your life."
];

const warnings = [
    "Be careful who you trust.",
    "Not everyone around you has good intentions.",
    "Avoid making impulsive decisions.",
    "You may face a challenge soon.",
    "Stay focused and avoid distractions.",
    "Someone may test your patience.",
    "Think before you speak today.",
    "Avoid unnecessary risks.",
    "Be cautious with money decisions.",
    "Don’t ignore your intuition.",
    "A small mistake could lead to bigger problems.",
    "Someone may not be honest with you.",
    "Stay alert in important situations.",
    "Avoid overthinking small issues.",
    "You may face unexpected delays.",
    "Don’t rush into decisions.",
    "Someone close may disappoint you.",
    "Be careful with your words today.",
    "Avoid trusting too quickly.",
    "Stay calm in stressful situations.",
    "You might feel pressure from others.",
    "Don’t let emotions control your actions.",
    "A situation may require patience.",
    "Be mindful of your surroundings.",
    "Avoid conflicts if possible.",
    "You may need to rethink your plans.",
    "Don’t ignore warning signs.",
    "Someone may try to mislead you.",
    "Stay grounded and practical.",
    "Be careful with new opportunities."
];

const button = document.getElementById('submitBtn');

button.addEventListener('click', (event) => {
    event.preventDefault();
 
    const result = document.getElementById('result');
    let name = document.getElementById('name').value.trim();
    let dob = document.getElementById('dob').value;
    let zodiac = document.getElementById('zodiac').value;

    if(name === "" || dob === "" || zodiac === "") {
        result.style.display = "block"; 
        result.innerText = "⚠️ Please provide all inputs ";
        return;
    }

    let index = Math.floor(Math.random() * 50);
    const firstmessage = futurePredictions[index];
    const secondmessage = lovePredictions[index];

    let day = new Date(dob).getDate();
    let dayindex = day % warnings.length;
    const thirdmessage = warnings[dayindex]; 

    let fourthindex = Math.floor(Math.random() * 20);
    const fourthmessage = victimCompliments[fourthindex];
    
    // THE FIX: Unhide the result box
    result.style.display = "block";

    result.innerHTML = `
        <strong>Future:</strong> ${firstmessage} <br><br>
        <strong>Love:</strong> ${secondmessage} <br><br>
        <strong>Warning:</strong> ${thirdmessage} <br><br>
        <strong>About You:</strong> ${fourthmessage}
    `;

    setTimeout(()=>{
        result.style.display = "none";
        result.innerHTML = "";

    },5000)

    setTimeout(()=>{
        location.reload();
    },5000);

});
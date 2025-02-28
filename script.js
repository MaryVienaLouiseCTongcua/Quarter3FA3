document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('showStory');
    const result = document.getElementById('result');

    const mostCrammed = document.getElementById('mostCrammed');
    const letterHint = document.getElementById('letterHint');
    const studyTime = document.getElementById('studyTime');

   
   button.addEventListener('click', function () {
       
        const math = Math.ceil(Math.random() * 20);
        const physics = Math.ceil(Math.random() * 20);
        const english = Math.ceil(Math.random() * 20);

        
        let max = Math.max(math, physics, english);
        let subjects = [];
        if (math === max) subjects.push('Math');
        if (physics === max) subjects.push('Physics');
        if (english === max) subjects.push('English');

        
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const letter = alphabet[Math.min(math, 26) - 1];

        
        const totalMinutes = physics * english;
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;

        
        mostCrammed.textContent = `The subject students cram the most is: ${subjects.join(', ')} (${max})`;
        letterHint.textContent = `The page of notes for the subject starts with the letter: '${letter}'`;
        studyTime.textContent = `It took them ${totalMinutes} minutes (${hours} hours and ${minutes} minutes) to finish their tasks.`;

       
        result.classList.remove('hidden');
    });
});

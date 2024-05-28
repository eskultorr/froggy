const btn = document.querySelector('button');

function addCss()
{
    const textarea = document.querySelector('textarea');
    const ases = textarea.value;
    const foreFront = document.querySelector('#forefront');
    foreFront.style.cssText = ases;
    console.log(foreFront);
}

btn.addEventListener('click', addCss);
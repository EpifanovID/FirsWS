const firs_name_for_click = document.getElementById("firs_name_for_click")
const second_name_for_click = document.getElementById("second_name_for_click")
const third_name_for_click = document.getElementById("third_name_for_click")

function find_edit_in_firs_name(){
    const f_n_f_c = document.getElementsByTagName('span')[3]
    console.log(f_n_f_c.innerText)
    f_n_f_c.innerText = 'Epifanov'
    f_n_f_c.style.fontWeight = 'bold'
}

function find_edit_in_second_name(){
    const s_n_f_c = document.getElementsByTagName('span')[4]
    console.log(s_n_f_c.innerText)
    s_n_f_c.innerText = 'Ilia'
    s_n_f_c.style.fontWeight = 'bold'
}

function find_edit_in_third_name(){
    const t_n_f_c = document.getElementsByTagName('span')[5]
    console.log(t_n_f_c.innerText)
    t_n_f_c.innerText = 'Dmitrievich'
    t_n_f_c.style.fontWeight = 'bold'
}

firs_name_for_click.addEventListener("click", find_edit_in_firs_name)
second_name_for_click.addEventListener("click", find_edit_in_second_name)
third_name_for_click.addEventListener("click", find_edit_in_third_name)
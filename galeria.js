let imagens = document.querySelectorAll('.small_img');	// variavel recebe elementos da classe das miniaturas
let modal = document.querySelector('.modal');	// variavel recebe o elemento da janela modal
let modalImg = document.querySelector('#modal_img');	// variavel recebe a imagem da janela modal
let btClose = document.querySelector('#bt_close');	// variavel recebe o elemento do botao fechar da janela modal
let srcVal = "";


for(let i = 0; i<imagens.length; i++){			// Para cada imagem presente no site
	
	imagens[i].addEventListener('click', function(){	// Declara uma funcao ao clicar na imagem
		srcVal = imagens[i].getAttribute('src');	// 'srcVal' recebe o endereco da imagem
		modalImg.setAttribute('src', srcVal);	// Configura o atributo da imagem modal('modalImg') com o src da imagem corrente
		modal.classList.toggle('modal_active');	// Adiciona a classe 'modal_active' ao elemento da janela modal
	});
}


btClose.addEventListener('click', function(){	// Declara um evento click no botao fechar
	modal.classList.toggle('modal_active');		// Retira a classe 'modal_active'
});
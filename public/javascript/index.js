const charactersAPI = new APIHandler('https://minions-api.herokuapp.com/characters');



window.addEventListener('load', () => {


  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI
      .getFullList()

      .then(response => {
        let text = ''
        response.data.forEach(eachCharacter => text +=
          `<div class="character-info">
            <div class="name">Character Name: ${eachCharacter.name}</div>
        <div class="occupation">Character Occupation: ${eachCharacter.occupation}</div>
        <div class="cartoon">Is a Cartoon?: ${eachCharacter.cartoon}</div>
        <div class="weapon">Character Weapon: ${eachCharacter.weapon}</div>
      </div>`)
        document.querySelector('.characters-container').innerHTML = text

      })
      .catch(err => console.log(err))

  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

    const characterId = document.querySelectorAll('.operation input')

    charactersAPI
      .getOneRegister(characterId)
      .then(response => {
        const character = response.data
        let text =
          `<div class="character-info">
            <div class="name">Character Name: ${character.name}</div>
        <div class="occupation">Character Occupation: ${character.occupation}</div>
        <div class="cartoon">Is a Cartoon?: ${character.cartoon}</div>
        <div class="weapon">Character Weapon: ${character.weapon}</div>
      </div>`
        document.querySelector('.characters-container').innerHTML = text

      })
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const characterId = document.querySelectorAll('.operation delete input')

    charactersAPI
      .deleteOneRegister(characterId)
      .then(response => {
        console.log(response.data)
      })
  });
  ///////////////////////////////////////////////////////////7

  // falta función para poder cogerl os valores del id a editar.
  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    const inputs = document.querySelectorAll('#edit-character-form input')

    const characterId = inputs[0].value

    const characterInfo = {
      name: inputs[1].value,
      occupation: inputs[2].value,
      weapon: inputs[3].value,
      cartoon: inputs[4].checked
    }

    charactersAPI
      .updateOneRegister(characterId, characterInfo)
      .then(response => {
        console.log(response)
      })
      .catch(err => console.log(err))

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    const inputs = document.querySelectorAll('#new-character-form input')

    const characterInfo = {
      name: inputs[0].value,
      occupation: inputs[1].value,
      weapon: inputs[2].value,
      cartoon: inputs[3].checked,
    }

    charactersAPI
      .createOneRegister(characterInfo)
      .then(response => {
        console.log(response)
      })
      .catch(err => console.log(err))
  });
});

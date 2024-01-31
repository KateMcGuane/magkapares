CUT OUT 

This file is an accumulation of bits of code taken out of my website to establish the logic of the website better, with the aim of adding any add-on struture and styling afterward.


HTML
 `<!-- Header -->
    <header>
        <h1 id="logo">Magkapares</h1>
    </header>

    <!-- Main Content -->
    <main> 
        <section>
            <div class="card-container">Match the images a learn Tagalog!</div>
            <div class="card">1</div>
            <div class="card">2</div>
            <div class="card">3</div>
            <div class="card">4</div>
            <div class="card">5</div>
            <div class="card">6</div>
            <div class="card">7</div>
            <div class="card">8</div>
            <div class="card">9</div>
            <div class="card">10</div>
            <div class="card">11</div>
            <div class="card">12</div>
            <div class="card">13</div>
            <div class="card">14</div>
            <div class="card">15</div>
            <div class="card">16</div>
        
        </section>
    </main>

    <!-- Footer -->
    <footer> 
        <ul class="socials">
            <li>
                <a href="https://www.tiktok.com/en/" target="_blank" rel="noopener"
                    aria-label="Visit our TikTok page (opens ina new tab)">
                    <i class="fa-brands fa-tiktok"></i></a>
            </li>
            <li>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener"
                    aria-label="Visit our Instagram page (opens ina new tab)">
                    <i class="fa-brands fa-instagram"></i></a>
            </li>
            <li>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener"
                    aria-label="Visit our Facebook page (opens ina new tab)">
                    <i class="fa-brands fa-facebook"></i></a>
            </li>
        </ul>
    </footer>`



CSS

`body {
    background-image: url("../images/background.png");
    background-color: red;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

header {
    padding: 0 1rem;
    position: relative;
    z-index: 99;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    background-color: orange;
}

h1 {
    background-image: none;
    background-color:yellow;
    font-family: 'Patrick Hand SC', sans-serif;
    font-size: 150%;
    letter-spacing: 2px;
}

main {
    background-color: green;
    /* Make main element take up any surplus space to push footer down */
    flex: 1 0 auto;
}

.card-container {
    background-image: none;
    background-color: teal;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
    justify-content: space-evenly;
}

.card {
    background-image: none;
    background-color: blue;
    position: relative;
    width: 100px;
    height: 150px;
    text-align: center;
}
footer {
    background-color: purple;
    display: grid;
    padding: 5%;
}

.socials {
    text-align: center;
    list-style-type: none;
 }
 
 .socials i {
    font-size: 160%;
    padding: 5%;
    color: #3a3a3a;
    display: flex;
    flex-direction: row;
}`

 


/* MEDIA QUERY: tablets & larger (768px & up) */
@media screen and (min-width: 768px) {
    /* Header */
    header {
      display: block;
      position: relative;
      width: fit-content;
      padding-right: 1rem;
    }
  
    #logo {
      font-size: 280%;
      line-height: 75px;
      margin: 0.5rem;
    }
  
    /* Main Content */
    main {
      /* Push main content down to accommodate larger header */
      margin-top: 83px;
    }
}
  
  /* MEDIA QUERY: Large devices (laptops & desktops, 992px & up) 
  MAY NEED TO REMOVE*/
  @media screen and (min-width: 992px) {
    
# aboutMe
This website is about me.

## First steps in HTML

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <title>About Me</title>
</head>
<body>

    <nav>
        <p style="font-size:16px;">Navigation</p>
        <ul>
            <li><a href="#peso_semantico">Peso semántico</a></li>
            <li><a href="#listas">Listas</a></li>
            <li><a href="#citas">citas</a></li>
            <li><a href="#deportes">Deportes</a></li>
        </ul>
    </nav>

    <h1 class="peso_semantico">Header 1: Peso Semántico</h1>
        <p>A mi me <i>gustan</i> las <em>croquetas</em></i></p>     <!-- Visualmente no son lo mismo pero semánticamente no, tiene más peso semántico
                                                                         la etiqueta em frente a i -->

        <p>A mi me <b>gustan</b> las <strong>croquetas</strong></p>  <!-- De la misma manera, strong tiene mayor peso semántico frente a b -->

    <h2 class="listas">Header 2: Listas</h2>
            <ul>                            <!-- Lista desordenada -->
                <li>List element 1</li>
                <li>List element 2</li>
                <li>List element 3</li>
            </ul>

            <ol>                            <!-- Lista ordenada -->
                <li>List element 1</li>
                <li>List element 2</li>
                <li>List element 3</li>
            </ol>

            <dl>                             <!-- Listas de definición o Definition Lists -->
                <dt>Término</dt>
                <dd>Definición</dd>
            </dl>

    <h3 class="citas">Header 3: Citas</h3>
            <blockquote>
                <p>Texto de cita.</p>
                <cite> - Persona citada</cite>
            </blockquote>

            <p style="padding-top: 20px;">Persona citada: <q>Texto de cita.</q></p>


    <main>
        <section class="deportes">
            <header>
                <h2>Deportes</h2>
                <h3>Sección dedicada a deportes</h3>
                <article>         <!-- article*3>h4{Article $}+p{texto del artículo}+footer>a{leer mas...} -->
                    <h4>Article</h4>
                    <p>texto del artículo</p>
                    <footer><a href="">Leer mas...</a></footer>
                </article>
                <article>
                    <h4>Article</h4>
                    <p>texto del artículo</p>
                    <footer><a href="">Leer mas...</a></footer>
                </article>
                <article>
                    <h4>Article</h4>
                    <p>texto del artículo</p>
                    <footer><a href="">Leer mas...</a></footer>
                </article>
            </header>
        </section>
        <section></section>
    </main>    
    


</body>
</html>

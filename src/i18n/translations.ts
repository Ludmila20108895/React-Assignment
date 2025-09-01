const translations = {
  en: {
    // --- app and navigation ---
    header: "Movie App",
    navDiscover: "Discover",
    navFavorites: "Favorites",
    navUpcoming: "Upcoming",
    navMustWatch: "Must Watch",
    navActors: "Actors",

    // --- page titles ---
    discoverMovies: "Discover Movies",
    favouriteMovies: "Favourite",
    upcomingMovies: "Upcoming",
    mustWatchMovies: "Must Watch",
    actorList: "Actors",
    actorDetails: "Actor Details",
    noResults: "No results found",

    // ---actor details ---
    biography: "Biography",
    backToActors: "Back to Actors",
    moreInfo: "More Info",
    birthday: "Birthday",
    placeOfBirth: "Place of Birth",
    alsoKnownAs: "Also known as",
    homepage: "Homepage",
    noBiography: "No biography available.",

    // --- for component movieDetails ---
    movieDetails: {
      overview: "Overview",
      genres: "Genres",
      runtime: "Runtime",
      minutes: "min",
      revenue: "Revenue",
      releaseDate: "Release Date",
      votes: "votes",
      reviewsBtn: "Reviews",
    },

    // --- filter UI ---
    filterUI: {
      title: "Filter the movies.",
      openBtn: "Filter",
      search: "Search",
      genreLabel: "Genre",
      sortTitle: "Sort the movies.",
    },

    // --- genres dictionary (used in filters) ---
    genres: {
      all: "All",
      Action: "Action",
      Adventure: "Adventure",
      Animation: "Animation",
      Comedy: "Comedy",
      Crime: "Crime",
      Documentary: "Documentary",
      Drama: "Drama",
      Family: "Family",
      Fantasy: "Fantasy",
      History: "History",
      Horror: "Horror",
      Music: "Music",
      Mystery: "Mystery",
      Romance: "Romance",
      ScienceFiction: "Science Fiction",
      TVMovie: "TV Movie",
      Thriller: "Thriller",
      War: "War",
      Western: "Western",
    },

    // --reviews ---
    authorName: "Author's name",
    reviewText: "Review text",
    ratingLabel: "Select Rating",
    ratingText: "Don't forget your rating",
    submitBtn: "Submit",
    resetBtn: "Reset",
    writeReview: "Write a review",
    backToMovies: "Back to Movies",
    reviewTooShort: "Review is too short",

    reviewForm: {
      title: "Write a review",
      reviewTitle: "Title",
      reviewText: "Review text",
      submit: "Submit",
      rating: "Rating",
      validation: {
        titleRequired: "Review title is required",
        textRequired: "Review content is required",
        ratingRequired: "Please provide a rating",
      },
      successMessage: "Thank you for submitting your review!",
    },

    movieReview: {
      heading: "Movie Reviews",
      reviewBy: "Review By",
      reviewsBtn: "Full Review",
    },
    // --- errors message for failing to upload movies ---
    common: {
      failedToLoadMovie: "Failed to load movie.",
      failedToLoadImages: "Failed to load images.",
      failedToLoadReviews: "Failed to load reviews.",
      networkError: "Network error. Please try again.",
    },

    // --- validation ---
    validation: {
      nameRequired: "Name is required",
      reviewRequired: "Review cannot be empty.",
      reviewTooShort: "Review is too short",
    },

    // --- rating labels ---
    ratings: {
      excellent: "Excellent",
      good: "Good",
      average: "Average",
      poor: "Poor",
      terrible: "Terrible",
    },

    // ---updating message ---
    processUpdate: " (updating…)",

    // --- empty states
    noFavourites:
      "You have no favourite movies yet. Go to the Home page and add some.",
    noMustWatch: "You have no movies in Must Watch yet.",
    waitingMovieDetails: "Waiting for movie details...",
    filter: "Filter",
  },
  es: {
    // --- app and navigation ---
    header: "Aplicación de Películas",
    navDiscover: "Descubrir",
    navFavorites: "Favoritos",
    navUpcoming: "Próximamente",
    navMustWatch: "Debe ver",
    navActors: "Actores",

    // --- page titles ---
    discoverMovies: "Descubrir de Películas",
    favouriteMovies: "Favoritas",
    upcomingMovies: "Próximamente",
    mustWatchMovies: "Debe ver",
    actorList: "Actores",
    actorDetails: "Detalles del Actor",
    noResults: "No se encontraron resultados",
    popularActors: "Actores Populares",

    // --- actor details ---
    biography: "Biografía",
    backToActors: "Volver a Actores",
    moreInfo: "Información",
    birthday: "Fecha de nacimiento",
    placeOfBirth: "Lugar de nacimiento",
    alsoKnownAs: "También conocido como",
    homepage: "Página web",
    noBiography: "No hay biografía disponible.",

    releaseDate: "Fecha de estreno",
    rating: "Calificación",

    // --- for component movieDetails ---
    movieDetails: {
      overview: "Resumen",
      genres: "Géneros",
      runtime: "Duración",
      minutes: "min",
      revenue: "Recaudación",
      releaseDate: "Fecha de estreno",
      votes: "votos",
      reviewsBtn: "Reseñas",
    },

    // --- filterUI ---
    filterUI: {
      title: "Filtrar las películas.",
      openBtn: "Filtrar",
      search: "Buscar",
      genreLabel: "Género",
      sortTitle: "Ordenar las películas.",
    },

    genres: {
      all: "Todos",
      Action: "Acción",
      Adventure: "Aventura",
      Animation: "Animación",
      Comedy: "Comedia",
      Crime: "Crimen",
      Documentary: "Documental",
      Drama: "Drama",
      Family: "Familia",
      Fantasy: "Fantasía",
      History: "Historia",
      Horror: "Terror",
      Music: "Música",
      Mystery: "Misterio",
      Romance: "Romance",
      ScienceFiction: "Ciencia ficción",
      TVMovie: "Película de TV",
      Thriller: "Suspenso",
      War: "Guerra",
      Western: "Western",
    },

    // -- updating message --
    processUpdate: " (actualizando…)",

    // --- reviews ---
    authorName: "Nombre del autor",
    reviewText: "Tu reseña",
    ratingLabel: "Selecciona una calificación",
    ratingText: "No olvides calificar",
    submitBtn: "Enviar",
    resetBtn: "Restablecer",
    writeReview: "Escribir una reseña",
    backToMovies: "Volver a Películas",
    reviewTooShort: "La reseña es demasiado corta",

    reviewForm: {
      title: "Escribe una reseña",
      reviewTitle: "Título",
      reviewText: "Tu reseña",
      submit: "Enviar",
      rating: "Calificación",
      validation: {
        titleRequired: "El título es obligatorio",
        textRequired: "El contenido de la reseña es obligatorio",
        ratingRequired: "Por favor, proporciona una calificación",
      },
      successMessage: "¡Gracias por enviar tu reseña!",
    },

    movieReview: {
      heading: "Reseñas de Películas",
      reviewBy: "Reseña por",
      reviewsBtn: "Leer Reseña",
    },

    // --- movie card ---
    movieCard: {
      overview: "Resumen",
      releaseDate: "Fecha de estreno",
      rating: "Rating",
    },

    // --- validation ---
    validation: {
      nameRequired: "El nombre es obligatorio",
      reviewRequired: "La reseña no puede estar vacía.",
      reviewTooShort: "La reseña es demasiado corta",
    },

    // --- errors message for failing to upload movies ---
    common: {
      failedToLoadMovie: "No se pudo cargar la película.",
      failedToLoadImages: "No se pudieron cargar las imágenes.",
      failedToLoadReviews: "No se pudieron cargar las reseñas.",
      networkError: "Error de red. Por favor, inténtalo de nuevo.",
    },

    // --- rating labels ---
    ratings: {
      excellent: "Excelente",
      good: "Bueno",
      average: "Regular",
      poor: "Malo",
      terrible: "Terrible",
    },

    // --- movieReview card ---
    reviewBy: "Reseña por",
    noReviewText: "Aún no hay reseñas.",

    // --- empty states ---
    noFavourites:
      "No tienes películas favoritas todavía. Ve a la página de inicio y añade algunas.",
    noMustWatch: "No tienes películas en ‘Por ver’ todavía.",
    waitingMovieDetails: "Esperando los detalles de la película...",
    filter: "Filtrar",
  },
  fr: {
    // --- app and navigation ---
    header: "Application de Films",
    navDiscover: "Découvrir",
    navFavorites: "Favoris",
    navUpcoming: "À venir",
    navMustWatch: "À voir",
    navActors: "Acteurs",

    // --- page titles ---
    discoverMovies: "Découvrir des Films",
    favouriteMovies: "Favoris",
    upcomingMovies: "À venir",
    mustWatchMovies: "À voir",
    actorList: "Acteurs",
    actorDetails: "Détails de l'acteur",
    popularActors: "Acteurs Populaires",
    noResults: "Aucun résultat trouvé",

    // --- actor details ---
    biography: "Biographie",
    backToActors: "Retour aux Acteurs",
    moreInfo: "Information",
    birthday: "Date de naissance",
    placeOfBirth: "Lieu de naissance",
    alsoKnownAs: "Aussi connu comme",
    homepage: "Site web",
    noBiography: "Biographie non disponible.",

    releaseDate: "Date de sortie",
    rating: "Note",

    // --- for component movieDetails ---
    movieDetails: {
      overview: "Aperçu",
      genres: "Genres",
      runtime: "Durée",
      minutes: "min",
      revenue: "Recettes",
      releaseDate: "Date de sortie",
      votes: "votes",
      reviewsBtn: "Avis",
    },

    // --- filterUI ---
    filterUI: {
      title: "Filtrer les films.",
      openBtn: "Filtrer",
      search: "Rechercher",
      genreLabel: "Genre",
      sortTitle: "Trier les films.",
    },

    genres: {
      all: "Tous",
      Action: "Action",
      Adventure: "Aventure",
      Animation: "Animation",
      Comedy: "Comédie",
      Crime: "Policier",
      Documentary: "Documentaire",
      Drama: "Drame",
      Family: "Famille",
      Fantasy: "Fantastique",
      History: "Histoire",
      Horror: "Horreur",
      Music: "Musique",
      Mystery: "Mystère",
      Romance: "Romance",
      ScienceFiction: "Science-fiction",
      TVMovie: "Téléfilm",
      Thriller: "Thriller",
      War: "Guerre",
      Western: "Western",
    },

    // --- updating message ---
    processUpdate: " (mise à jour…)",

    // --- reviews ---
    authorName: "Nombre del autor",
    reviewText: "Tu reseña",
    ratingLabel: "Sélectionner une note",
    ratingText: "N'oubliez pas votre note",
    submitBtn: "Envoyer",
    resetBtn: "Réinitialiser",
    writeReview: "Écrire une critique",
    backToMovies: "Retour aux Films",
    reviewTooShort: "La critique est trop courte",

    reviewForm: {
      title: "Rédiger un avis",
      reviewTitle: "Titre",
      reviewText: "Votre avis",
      submit: "Envoyer",
      rating: "Note",
      validation: {
        titleRequired: "Le titre est obligatoire",
        textRequired: "Le contenu de l'avis est obligatoire",
        ratingRequired: "Veuillez fournir une note",
      },
      successMessage: "Merci d'avoir soumis votre avis !",
    },

    movieReview: {
      heading: "Avis sur les Films",
      reviewBy: "Avis de",
      reviewsBtn: "Lire l’Avis",
    },

    // --- validation ---
    validation: {
      nameRequired: "Le nom est requis",
      reviewRequired: "L’avis ne peut pas être vide.",
      reviewTooShort: "L'avis est trop court",
    },

    // --- errors message for failing to upload movies ---
    common: {
      failedToLoadMovie: "Impossible de charger le film.",
      failedToLoadImages: "Impossible de charger les images.",
      failedToLoadReviews: "Impossible de charger les avis.",
      networkError: "Erreur réseau. Veuillez réessayer.",
    },

    // --- rating labels ---
    ratings: {
      excellent: "Excellent",
      good: "Bon",
      average: "Moyen",
      poor: "Mauvais",
      terrible: "Terrible",
    },

    // --- empty states  ---
    noFavourites:
      "Vous n'avez pas encore de films favoris. Allez sur la page d'accueil et ajoutez-en.",
    noMustWatch: "Vous n'avez pas encore de films « À voir ».",
    waitingMovieDetails: "En attente des détails du film...",
    filter: "Filtrer",
  },
} as const;

export default translations;

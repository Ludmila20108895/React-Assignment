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

    // --- movie card ---
    releaseDate: "Release Date",
    rating: "Rating",

    // --reviews ---
    reviews: "Reviews",
    addReview: "Add Review",
    authorName: "Author's name",
    reviewText: "Review text",
    ratingLabel: "Rating",
    ratingText: "Don't forget your rating",
    submitBtn: "Submit",
    resetBtn: "Reset",

    movieReview: {
      heading: "Movie Reviews",
      noReviews: "No reviews found for this movie.",
      loading: "Loading reviews...",
      error: "Failed to fetch reviews.",
    },

    // --- validation ---
    validation: {
      nameRequired: "Name is required",
      reviewRequired: "Review cannot be empty.",
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

    // -- updating message --
    processUpdate: " (actualizando…)",

    // --- reviews ---
    reviews: "Reseñas",
    addReview: "Agregar Reseña",
    authorName: "Nombre del autor",
    reviewText: "Texto de la reseña",
    ratingLabel: "Calificación",
    ratingText: "No olvides tu calificación",
    submitBtn: "Enviar",
    resetBtn: "Restablecer",
    thankYouReview: "Gracias por enviar una reseña",

    movieReview: {
      heading: "Reseñas de Películas",
      noReviews: "No se encontraron reseñas para esta película.",
      loading: "Cargando reseñas...",
      error: "No se pudieron obtener las reseñas.",
    },

    // --- validation ---
    validation: {
      nameRequired: "El nombre es obligatorio",
      reviewRequired: "La reseña no puede estar vacía.",
      reviewTooShort: "La reseña es demasiado corta",
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
    moreInfo: " Information",
    birthday: "Date de naissance",
    placeOfBirth: "Lieu de naissance",
    alsoKnownAs: "Aussi connu comme",
    homepage: "Site web",
    noBiography: "Biographie non disponible.",

    releaseDate: "Date de sortie",
    rating: "Note",

    // --- updating message ---
    processUpdate: " (mise à jour…)",

    // --- reviews ---
    reviews: "Avis",
    addReview: "Ajouter un avis",
    authorName: "Nom de l’auteur",
    reviewText: "Texte de l’avis",
    ratingLabel: "Note",
    ratingText: "N’oubliez pas votre note",
    submitBtn: "Soumettre",
    resetBtn: "Réinitialise",
    thankYouReview: "Merci pour votre avis",

    movieReview: {
      heading: "Avis sur les Films",
      noReviews: "Aucun avis trouvé pour ce film.",
      loading: "Chargement des avis...",
      error: "Échec du chargement des avis.",
    },

    // --- validation ---
    validation: {
      nameRequired: "Le nom est requis",
      reviewRequired: "L’avis ne peut pas être vide.",
      reviewTooShort: "L'avis est trop court",
    },

    // --- rating labels ---
    ratings: {
      excellent: "Excellent",
      good: "Bon",
      average: "Moyen",
      poor: "Faible",
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

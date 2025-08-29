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

    // ---actor details ---
    biography: "Biography",
    backToActors: "Back to Actors",
    moreInfo: "More Info",
    birthday: "Birthday",
    placeOfBirth: "Place of Birth",
    alsoKnownAs: "Also known as",
    homepage: "Homepage",
    noBiography: "No biography available.",

    // --reviews ---
    reviews: "Reviews",
    addReview: "Add Review",
    authorName: "Author's name",
    reviewText: "Review text",
    ratingLabel: "Rating",
    ratingText: "Don't forget your rating",
    submitBtn: "Submit",
    resetBtn: "Reset",
    thankYouReview: "Thank you for submitting a review",

    // --- validation ---
    nameRequired: "Name is required",
    reviewRequired: "Review cannot be empty.",

    // --- rating labels ---
    ratingExcellent: "Excellent",
    ratingGood: "Good",
    ratingAverage: "Average",
    ratingPoor: "Poor",
    ratingTerrible: "Terrible",

    // --- movieReview card ---
    reviewBy: "Review by",
    rating: "Rating",
    noReviewText: "No review added yet.",

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
    navUpcoming: "Próximos",
    navMustWatch: "Por ver",
    navActors: "Actores",

    // --- page titles ---
    discoverMovies: "Descubrir",
    favouriteMovies: "Favoritos",
    upcomingMovies: "Próximos",
    mustWatchMovies: "Por ver",
    actorList: "Actores",
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

    // -- updating message --
    processUpdate: " (actualizando…)",

    // --- reviews ---
    reviews: "Reseñas",
    addReview: "Añadir una reseña",
    authorName: "Nombre del autor",
    reviewText: "Texto de la reseña",
    ratingLabel: "Puntuación",
    ratingText: "No olvides tu puntuación",
    submitBtn: "Enviar",
    resetBtn: "Restablecer",
    thankYouReview: "Gracias por enviar una reseña",

    // --- validation ---
    nameRequired: "El nombre es obligatorio",
    reviewRequired: "La reseña no puede estar vacía.",

    // --- rating labels ---
    ratingExcellent: "Excelente",
    ratingGood: "Buena",
    ratingAverage: "Normal",
    ratingPoor: "Mala",
    ratingTerrible: "Terrible",

    // --- movieReview card ---
    reviewBy: "Reseña por",
    rating: "Puntuación",
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
    popularActors: "Acteurs Populaires",

    // --- actor details ---
    biography: "Biographie",
    backToActors: "Retour aux Acteurs",
    moreInfo: " Information",
    birthday: "Date de naissance",
    placeOfBirth: "Lieu de naissance",
    alsoKnownAs: "Aussi connu sous le nom",
    homepage: "Site web",
    noBiography: "Biographie non disponible.",

    // --- updating message ---
    processUpdate: " (mise à jour…)",

    // --- reviews ---
    reviews: "Avis",
    addReview: "Ajouter un avis",
    authorName: "Nom de l’auteur",
    reviewText: "Texte de l’avis",
    ratingLabel: "Note",
    ratingText: "N’oubliez pas votre note",
    submitBtn: "Envoyer",
    resetBtn: "Réinitialiser",
    thankYouReview: "Merci pour votre avis",

    // --- validation ---
    nameRequired: "Le nom est requis",
    reviewRequired: "L’avis ne peut pas être vide.",

    // --- rating labels ---
    ratingExcellent: "Excellent",
    ratingGood: "Bon",
    ratingAverage: "Moyen",
    ratingPoor: "Mauvais",
    ratingTerrible: "Très mauvais",

    // --- movieReview card ---
    reviewBy: "Rédigé par",
    rating: "Note",
    noReviewText: "Aucun avis pour le moment.",

    // --- empty states  ---
    noFavourites:
      "Vous n'avez pas encore de films favoris. Allez sur la page d'accueil et ajoutez-en.",
    noMustWatch: "Vous n'avez pas encore de films « À voir ».",
    waitingMovieDetails: "En attente des détails du film...",
    filter: "Filtrer",
  },
} as const;

export default translations;

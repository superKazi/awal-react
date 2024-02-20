function formatBreedName(breedName) {
  return breedName
    .replaceAll("-", " ")
    .split(" ")
    .map(
      (splitBreed) => splitBreed.charAt(0).toUpperCase() + splitBreed.slice(1),
    )
    .join(" ");
}

export { formatBreedName };

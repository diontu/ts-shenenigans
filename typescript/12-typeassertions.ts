try {
    // minding my own business and then...
    throw "error!   ";
} catch (e: unknown) {
    (e as string).trim();
}

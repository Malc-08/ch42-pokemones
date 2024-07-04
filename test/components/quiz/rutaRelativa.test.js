import { getFileName } from '../../../src/components/quiz/rutaRelativa.js';

test("Verificar el nombre del archivo desde la ruta relativa", () => {
    expect(getFileName("/index.html")).toBe("index.html");
    expect(getFileName("/src/pages/contact/contact.html")).toBe("contact.html");
});

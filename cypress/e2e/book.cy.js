const book1 = {
    title: "Harry potter and the philosopher's stone",
    description:
      "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling. The first novel in the Harry Potter series and Rowling's debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry.",
    author: "J. K. Rowling",
  };
  
  const book2 = {
    title: "Что такое тестирование. Курс молодого бойца",
    description:
      "Уникальная книга-тренинг по тестированию программ, охватывающая весь необходимый тестировщику спектр знаний с азов до сложных концепций. Рассматриваются виды и методики тестирования, способы поиска ошибок в программах, оформления тест-кейсов и чек-листов, описания выявленных недостатков и предлагаемых улучшений. Книга содержит домашние задания, выполнив которые читатель освоит тестирование ПО на практике и соберет портфолио, необходимое для последующего трудоустройства.",
    author: "Ольга Назина",
  };
  
  describe("Book test", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.login("bropet@mail.ru", "123");
    });
  
    it("Should add a new book", () => {
      cy.addBook(book1);
      cy.contains("Harry potter and the philosopher's stone").should(
        "be.visible"
      );
    });
  
    it("Should add another new book", () => {
      cy.addBook(book2);
      cy.contains("Что такое тестирование. Курс молодого бойца").should(
        "be.visible"
      );
    });
  
    it("Should add new book to favorite", () => {
      cy.addBookToFavorite(book2);
      cy.visit("/favorites");
      cy.get(".card-title").should("contain.text", book2.title);
    });
  
    it("Should delete book from favorite", () => {
      cy.visit("/favorites");
      cy.contains(book2.title)
        .should("be.visible")
        .within(() => cy.get(".card-footer > .btn").click({ force: true }));
      cy.contains(book2.title).should("not.exist");
    });
  });
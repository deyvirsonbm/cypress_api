var joiAssert = require("joi-assert");

describe('Star Wars People', () => {
    it('Get em uma People específica', () => {
                
        cy.request('people/1/')
            .then((res) => {
            expect(res.body).to.have.property('name', 'Luke Skywalker');
            expect(res.body).to.have.property('height', "172");
            expect(res.body).to.have.property('mass', "77");
            expect(res.body).to.have.property('hair_color', 'blond');
            expect(res.body).to.have.property('skin_color', 'fair');
            expect(res.body).to.have.property('eye_color', 'blue');
            expect(res.body).to.have.property('birth_year', '19BBY');
            expect(res.body).to.have.property('gender', 'male');
         })
    })

  })

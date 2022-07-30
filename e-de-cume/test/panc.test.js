const Pancs = require("../src/models/pancsModel");

describe("Get panc test", () => {
    const pancs = new Pancs({
        id: "6",
        cientificName: "Acrocomia aculeata",
        popularName: "Macaíba, macaúba, macaúva",
        area: "Norte, Nordeste, Centro-oeste, Sudeste",
        edibleParts: "Frutos maduros",
      });
    
      it("new panc", () => {
        expect(pancs.cientificName).toBe("Acrocomia aculeata");
      });
      it("new panc popular name", () => {
        expect(pancs.popularName).toBe("Macaíba, macaúba, macaúva");
      });
      it("area", () => {
        expect(pancs.area).toBe("Norte, Nordeste, Centro-oeste, Sudeste");
      });
      it("edible parts", () => {
        expect(pancs.edibleParts).toBe("Frutos maduros");
      });
    });

describe("Create new panc", () => {
  const pancs = new Pancs({
    id: "6",
    cientificName: "Acrocomia aculeata",
    popularName: "Macaíba, macaúba, macaúva",
    area: "Norte, Nordeste, Centro-oeste, Sudeste",
    edibleParts: "Frutos maduros",
  });
    it("must save in the database a new panc", () => {
        pancs.save().then((data) => {
            expect(data.cientificName).toBe("Acrocomia aculeata")
        });
    });
  });

  describe("Update panc - area example", () => {
    const pancs = new Pancs({
        id: "6",
        cientificName: "Acrocomia aculeata",
        popularName: "Macaíba, macaúba, macaúva",
        area: "Norte, Nordeste, Centro-oeste, Sudeste",
        edibleParts: "Frutos maduros",
      });
        it("must update the area in the database", () => {
            pancs.save().then((newdata) => {
                expect(newdata.area).toBe("Norte, Nordeste, Centro-oeste, Sudeste, Sul")
            });
        });
  });
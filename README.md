# Demo použití drag&drop s SVG obrázkem

## Spuštění

```bash
npm install
npm start dev
```

## Použití

Nahoře je cílový obrázek (čtyři čtverce) a dva cílové body. Cílové body jsou komponenta `DropPoint`, vykreslená je tečka, ale kolem ní je neviditelný kruh, který funguje jako plocha, do které je nutné přetáhnout některý ze spodních obrázků.

Dole jsou další dva obrázky, modrý a červený čtverec. Jsou vytvořené komponentou `Draggable`. Tyto obrázky je možné přetáhnout na cílový obrázek.

Po přetažen se spustí funkce `handleDragEnd`, která do konzole vypíše, který obrázek a kam byl přetažen.
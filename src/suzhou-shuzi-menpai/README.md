# Suzhou Shu-Zi-Men-Pai (Scan-to-enter building)

## Usage

Just put all files into your web server, and access index.html. 

## If the page has upgraded

If the official webpage has upgraded, you need to use the self-hosted version to generate this webpage again. 

1. Decompress `complete-server.tar.gz` and read README.md to `reproduce my work`. 
2. After setting up the web server successfully, you can save the webpage in browser, and replace `suzhou_ShuZiMenPai.html`. 
3. Modify the generated `suzhou_ShuZiMenPai.html`: Replace the datetime with `PLACEHOLDER_DATETIME`, replace the PCR date with `PLACEHOLDER_PCRDATE`, and replace address with `PLACEHOLDER_ADDR`. Also add `<script src="do_replace.js"></script>` before `</body>`

> Developer: Visit <https://github.com/say-no-to-wechat/suzhou-scan2enter> to download the complete original server.



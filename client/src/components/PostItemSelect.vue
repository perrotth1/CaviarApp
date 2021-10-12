<template>
<div class="block">
    <div class="columns">
        <div class="column is-3" id="clothingItemImg">
            <figure class="image is-square">
                <img src="https://images-na.ssl-images-amazon.com/images/I/41jS2lfDYzL._AC_UL650_SR500,650_QL65_.jpg" style="border-radius: 10px;">
            </figure>
        </div>
        <div class="column is-3" id="searchOrUpload">
            <input class="input is-primary" type="text" name="search" placeholder="Search tops..."> 
            <button class="button" id="shirtSearchButton">Search</button>
            <br><br>
            Or choose custom pic:
            <div class="file">
                <label class="file-label">
                    <input class="file-input" type="file" name="example">
                    <span class="file-cta">
                    <span class="file-icon">
                        <i class="fas fa-upload"></i>
                    </span>
                    <span class="file-label">
                        Choose file…
                    </span>
                    </span>
                </label>
            </div>
        </div>
        <div class="column is-6" id="searchResultsArea">
            <div class="box" id="resultsWindow"> 
                <ul id="results">
                    <li>Search result</li>
                    <li>Search result</li>
                    <li>Search result</li>
                </ul>
            </div>
        </div>
    </div>
</div>    

</template>

<script>

export default {
    name: 'PostItemSelect',
    components: {
        
    }
}

</script>

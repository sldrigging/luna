# luna

Product and Catalog Navigation:
    -Instead of images, now add <span> tags to admin panel in product options. 
    -Checks id and navigates accordingly.

    -For Catalog, checks if title has "Catalog" in it, if yes, navigates t0 _c_### instead of _p_###.
    -The Catalog has to be the last index for different CSS.

Selected Catalog ID CSS:
    -checks catalog id from 3dcart variable
    -checks if it matches with span value and adds selectedcat class if true

L.MarkerClusterGroupCustom = L.MarkerClusterGroup.extend({
    _initializeGrid: function (targetGrid, zoom, radiusFn) {
		// targetGrid[zoom] = (zoom === 15) ? new L.CustomGrid(radiusFn(zoom)) : new L.DistanceGrid(radiusFn(zoom));
        targetGrid[zoom] = [];
	},

    _addLayer: function (layer, zoom) {
        var gridClusters = this._gridClusters,
            gridUnclustered = this._gridUnclustered;

        for (; zoom >= 0; zoom--) {

            //Try find a cluster close by
            var closest = this.getSimilar(gridClusters[zoom], layer);
            if (zoom > 13) {

            } else {

            }
        }
    }
});

L.markerClusterGroupCustom = function (options) {
	return new L.MarkerClusterGroupCustom(options);
};

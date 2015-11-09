L.MarkerClusterGroupCustom = L.MarkerClusterGroup.extend({
    _initializeGrid: function (targetGrid, zoom, radiusFn) {
		targetGrid[zoom] = new L.DistanceGrid(radiusFn(zoom));
		targetGrid[zoom] = new L.DistanceGrid(radiusFn(zoom));
	},
});

L.markerClusterGroupCustom = function (options) {
	return new L.MarkerClusterGroupCustom(options);
};

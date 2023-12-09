window.SIDEBAR_ITEMS = {"constant":["IDX_DTYPE","NULL"],"enum":["AggExpr","AnyValue","ArrowDataType","ArrowTimeUnit","AsofStrategy","BooleanFunction","CategoricalOrdering","ClosedWindow","CommentPrefix","CsvEncoding","DataType","Excluded","Expr","FillNullStrategy","FunctionExpr","GroupByMethod","GroupsIndicator","GroupsProxy","IndexOrder","InterpolationMethod","IpcCompression","JoinType","JoinValidation","JsonFormat","Label","LiteralValue","LogicalPlan","NullValues","Operator","ParallelStrategy","ParquetCompression","PolarsError","QuantileInterpolOptions","QuoteStyle","RankMethod","RevMapping","RevMappingBuilder","SearchSortedSide","StartBy","TimeUnit","UniqueKeepStrategy","WindowMapping","WindowType"],"fn":["_join_suffix_name","_sort_or_hash_inner","abs","all","apply_binary","apply_multiple","arange","arg_sort_by","arg_where","as_struct","avg","base_utc_offset","binary_expr","call_categorical_merge_operation","cast","check_projected_arrow_schema","check_projected_schema","check_projected_schema_impl","clip","clip_max","clip_min","coalesce","col","collect_all","cols","concat","concat_expr","concat_lf_diagonal","concat_list","concat_str","count","create_enum_data_type","cum_count","cum_fold_exprs","cum_max","cum_min","cum_prod","cum_reduce_exprs","cum_sum","date_ranges","datetime","datetime_range","datetime_ranges","datetime_to_timestamp_ms","datetime_to_timestamp_ns","datetime_to_timestamp_us","default_join_ids","diff","dst_offset","dtype_col","dtype_cols","duration","first","floor_div_series","fmt_group_by_column","fold_exprs","format_str","get_reader_bytes","get_sequential_row_statistics","group_by_values","group_by_windows","hor_str_concat","in_nanoseconds_window","indexes_to_usizes","int_range","int_ranges","interpolate","is_first_distinct","is_in","is_last_distinct","is_not_null","is_null","last","lit","make_categoricals_compatible","map_binary","map_list_multiple","map_multiple","materialize_empty_df","materialize_projection","max","mean","median","merge_dtypes","min","not","private_left_join_multiple_keys","quantile","reduce_exprs","repeat","repeat_by","replace_time_zone","resolve_homedir","search_sorted","split_helper","split_to_struct","str_concat","strip_chars","strip_chars_end","strip_chars_start","strip_prefix","strip_suffix","sum","ternary_expr","time_ranges","unix_time","when"],"macro":["df","polars_bail","polars_ensure","polars_err","polars_warn"],"mod":["aggregations","arity","array","binary","cat","chunkedarray","cloud","consts","datatypes","datetime","default_arrays","dt","expr","fill_null","fixed_size_list","float_sum","full","gather","gather_skip_nulls","mode","nan_propagating_aggregate","null","predicates","read_impl","series","slice","sort","string","udf","utils","zip"],"static":["BOOLEAN_RE","FLOAT_RE","INTEGER_RE"],"struct":["AggregationContext","AnonymousScanOptions","Arc","ArrayNameSpace","ArrowField","ArrowSchema","AsOfOptions","BatchedParquetReader","BinaryChunkedBuilder","BinaryType","BooleanChunkedBuilder","BooleanType","Bounds","BoundsIter","BrotliLevel","CatIter","CategoricalChunked","CategoricalChunkedBuilder","CategoricalNameSpace","CategoricalType","ChainedThen","ChainedWhen","ChunkedArray","CsvReader","CsvWriter","CsvWriterOptions","DataFrame","DateType","DatetimeArgs","DatetimeType","DecimalType","Duration","DurationArgs","DurationType","DynamicGroupOptions","Field","FieldsMapper","FileMetaData","FixedSizeListType","Flat","Float32Type","Float64Type","GlobalRevMapMerger","GroupBy","GroupsIdx","GroupsProxyIter","GroupsProxyParIter","GzipLevel","Int128Type","Int16Type","Int32Type","Int64Type","Int8Type","IpcReader","IpcStreamReader","IpcStreamWriter","IpcStreamWriterOption","IpcWriter","IpcWriterOption","IpcWriterOptions","JoinArgs","JoinBuilder","JoinOptions","JsonLineReader","JsonReader","JsonWriter","JsonWriterOptions","LazyCsvReader","LazyFrame","LazyGroupBy","LazyJsonLineReader","ListBinaryChunkedBuilder","ListBooleanChunkedBuilder","ListNameSpace","ListPrimitiveChunkedBuilder","ListType","ListUtf8ChunkedBuilder","Logical","MeltArgs","Nested","NoNull","Null","ObjectType","OptState","OwnedObject","ParquetReader","ParquetWriteOptions","ParquetWriter","PhysicalIoHelper","PrimitiveChunkedBuilder","RankOptions","RollingCovOptions","RollingGroupOptions","RollingOptions","RollingOptionsFixedWindow","RollingOptionsImpl","RollingQuantileParams","RollingVarParams","ScanArgsAnonymous","ScanArgsIpc","ScanArgsParquet","Schema","SerializeOptions","Series","SlicedGroups","SortMultipleOptions","SortOptions","SpecialEq","StrHashLocal","StringCacheHolder","StrptimeOptions","StructArray","StructChunked","StructNameSpace","Then","TimeType","UInt16Type","UInt32Type","UInt64Type","UInt8Type","UnionArgs","UserDefinedFunction","Utf8ChunkedBuilder","Utf8Type","When","Window","ZstdLevel"],"trait":["AnonymousScan","ArgAgg","ArrayCollectIterExt","ArrayFromIter","ArrayFromIterDtype","AsBinary","AsList","AsRefDataType","AsUtf8","AsofJoin","AsofJoinBy","BinaryNameSpaceImpl","BinaryUdfOutputField","CategoricalMergeOperation","ChunkAgg","ChunkAggSeries","ChunkAnyValue","ChunkApply","ChunkApplyKernel","ChunkBytes","ChunkCast","ChunkCompare","ChunkExpandAtIndex","ChunkExplode","ChunkFillNullValue","ChunkFilter","ChunkFull","ChunkFullNull","ChunkQuantile","ChunkReverse","ChunkRollApply","ChunkSet","ChunkShift","ChunkShiftFill","ChunkSort","ChunkTake","ChunkTakeUnchecked","ChunkUnique","ChunkVar","ChunkZip","ChunkedBuilder","ChunkedCollectInferIterExt","ChunkedCollectIterExt","ChunkedSet","CrossJoin","DataFrameJoinOps","DataFrameOps","DateMethods","DatetimeMethods","DurationMethods","ExprEvalExtension","FromData","FromDataBinary","FromDataUtf8","FunctionOutputField","GetAnyValue","IndexOfSchema","IndexToUsize","InitHashMaps","InitHashMaps2","IntoGroupsProxy","IntoLazy","IntoListNameSpace","IntoSeries","IntoVec","IsFirstDistinct","IsLastDistinct","JoinDispatch","LazyFileListReader","LhsNumOps","ListBuilderTrait","ListFromIter","ListNameSpaceExtension","ListNameSpaceImpl","Literal","LogicalType","MutableBitmapExtension","NamedFrom","NamedFromOwned","NewChunkedArray","NumOpsDispatch","NumOpsDispatchChecked","NumericNative","PartitionedAggregation","PhysicalExpr","PolarsArray","PolarsDataType","PolarsFloatType","PolarsIntegerType","PolarsIterator","PolarsMonthEnd","PolarsMonthStart","PolarsNumericType","PolarsObject","PolarsRound","PolarsTemporalGroupby","PolarsTruncate","PolarsUpsample","QuantileAggSeries","Reinterpret","RenameAliasFn","RollingSeries","RoundSeries","SerReader","SerWriter","SeriesBinaryUdf","SeriesJoin","SeriesMethods","SeriesOpsTime","SeriesRank","SeriesSealed","SeriesTrait","SeriesUdf","SlicedArray","StaticArray","TemporalMethods","TimeMethods","ToDummies","UdfSchema","Utf8Methods","Utf8NameSpaceImpl","VarAggSeries","VecHash"],"type":["AllowedOptimizations","ArrayChunked","ArrayRef","BinaryChunked","BooleanChunked","BorrowIdxItem","ChunkId","ChunkJoinIds","ChunkJoinOptIds","DateChunked","DatetimeChunked","DecimalChunked","DurationChunked","DynArgs","FileMetaDataRef","FillNullLimit","Float32Chunked","Float64Chunked","GetOutput","GroupsSlice","IdxArr","IdxCa","IdxItem","IdxSize","IdxType","InnerJoinIds","Int128Chunked","Int16Chunked","Int32Chunked","Int64Chunked","Int8Chunked","LargeBinaryArray","LargeListArray","LargeStringArray","LeftJoinIds","ListChunked","ObjectChunked","PathIterator","PlHashMap","PlHashSet","PlIdHashMap","PlIndexMap","PlIndexSet","PolarsResult","SchemaRef","TimeChunked","TimeZone","UInt16Chunked","UInt32Chunked","UInt64Chunked","UInt8Chunked","Utf8Chunked"]};
﻿using System.Linq.Expressions;

namespace Core.Specifications
{
    public class Specification<T> : ISpecification<T>
    {
        public Specification( )
        {
        }

        public Specification(Expression<Func<T, bool>> criteria)
        {
            Criteria=criteria;
            
        }

        public Expression<Func<T, bool>> Criteria { get; }

        public List<Expression<Func<T, object>>> Includes { get; } = new();

        public Expression<Func<T, object>> OrderBy { get; private set; }

        public Expression<Func<T, object>> OrderByDescending { get; private set; }

        public int Take { get; private set; }

        public int Skip { get; private set; }

        public bool IsPagingEnabled { get; private set; }

        protected void AddInclude(Expression<Func<T, object>> include) { Includes.Add(include); }

        protected void AddOrderBy(Expression<Func<T, object>> orderBy)
        {
            OrderBy = orderBy;
        }
        protected void AddOrderByDescending(Expression<Func<T, object>> orderByDescending)
        {
            OrderByDescending=orderByDescending;
        }

        protected void AddPagination(int skip , int take)
        {
            Skip = skip;
            Take = take;
            IsPagingEnabled = true;
        }


    }
}
